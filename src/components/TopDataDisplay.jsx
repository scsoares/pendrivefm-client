import { useState, useEffect } from "react";
import domtoimage from "dom-to-image";
import getUserTopData from "../api/lastfm";
import TemplateSelection from "./TemplateSelection";
import List from "./List";
import { Grid } from "./Grid";

const TopDataDisplay = ({ user }) => {
  const [method, setMethod] = useState("user.gettopalbums");
  const [period, setPeriod] = useState("1month");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getUserTopData(user, method, period);
        setData(result.slice(0, 10));
      } catch (error) {
        setError("Failed to fetch Last.fm data");
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user, method, period]);

  const downloadImage = () => {
    const node = document.getElementById("template");

    const scale = window.devicePixelRatio || 2;

    const options = {
      quality: 1,
      width: node.scrollWidth * scale,
      height: node.scrollHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${node.scrollWidth}px`,
        height: `${node.scrollHeight}px`,
      },
    };

    domtoimage
      .toPng(node, options)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "screenshot.png";
        link.click();
      })
      .catch((error) => {
        console.error("Error capturing the image:", error);
      });
  };

  if (!user) return null;
  if (loading) return <p className="ml-[10rem]">Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div>
        <div className="flex gap-10">
          <div className="mt-4 ml-[2rem]">
            <label htmlFor="period-select" className="mb-2"></label>
            <select
              id="period-select"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="border rounded min-h-[1rem]"
            >
              <option value="overall">Geral</option>
              <option value="7day">Última semana</option>
              <option value="1month">Último mês</option>
              <option value="3month">Últimos 3 meses</option>
              <option value="6month">Últimos 6 meses</option>
              <option value="12month">Último ano</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center max-w-[70vw] font-bold gap-1 lg:gap-5 lg:ml-[10rem] mt-5 mx-2 mb-10">
          <div
            className="cursor-pointer bg-orange-100 lg: p-2 rounded-lg hover:underline text-orange-400"
            onClick={() => {
              setSelectedTemplate(1);
            }}
          >
            Estouradas
          </div>
          <div
            className="cursor-pointer bg-blue-100 p-2 rounded-lg  hover:underline text-blue-500 "
            onClick={() => {
              setSelectedTemplate(2);
            }}
          >
            Gospel
          </div>
          <div
            className="cursor-pointer bg-red-100 p-2 rounded-lg hover:underline text-red-500"
            onClick={() => {
              setSelectedTemplate(3);
            }}
          >
            Rock
          </div>
          <div
            className="cursor-pointer bg-yellow-100 p-2 rounded-lg  hover:underline text-yellow-800"
            onClick={() => {
              setSelectedTemplate(4);
            }}
          >
            Sofrência
          </div>
          <div
            className="cursor-pointer bg-fuchsia-100 p-2 rounded-lg hover:underline text-fuchsia-500"
            onClick={() => {
              setSelectedTemplate(5);
            }}
          >
            Flashback
          </div>
        </div>
        <div className="relative flex flex-col" id="template">
          <div className="relative">
            <div className="">
              <TemplateSelection selectedTemplate={selectedTemplate} />
            </div>
            <div className="absolute lg:top-[14rem] lg:left-[7rem] top-[3.5rem] left-[1.4rem]">
              <List data={data} period={period} method={method} />
            </div>
            <div className="absolute flex max-w-auto left-[14rem] top-[10.8rem] lg:left-[48.5rem] lg:top-[36rem]">
              <Grid data={data} period={period} method={method} />
            </div>
          </div>
        </div>
        <button
          onClick={downloadImage}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded block mx-auto mb-32"
        >
          Baixar a imagem
        </button>
      </div>
    </>
  );
};

export default TopDataDisplay;

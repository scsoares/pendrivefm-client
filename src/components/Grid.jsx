import { useState, useEffect } from "react";

export const Grid = ({ data, period, method }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImageUrl = (images) => {
    return (
      images?.find((image) => image.size === "extralarge")?.["#text"] || ""
    );
  };

  useEffect(() => {
    setLoading(false);
    setError(null);
  }, [data, period, method]);

  return (
    <div className="grid grid-cols-5 gap-1 max-w-[11rem] lg:max-w-[40rem]">
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      {data.map((item, index) => (
        <div key={index} className="relative flex justify-center items-center">
          <img
            src={getImageUrl(item.image)}
            alt={`Album ${index}`}
            className="h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

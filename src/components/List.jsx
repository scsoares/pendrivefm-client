const List = ({ data, period, method }) => {
  const getPeriodName = () => {
    switch (period) {
      case "7day":
        return "da semana";
      case "1month":
        return "do mês";
      case "3month":
        return "do trimestre";
      case "6month":
        return "do semestre";
      case "12month":
        return "do ano";
      case "overall":
        return "geral";
      default:
        return "do mês";
    }
  };

  return (
    <div>
      <h3 className="font-['Twentieth'] uppercase text-white text-xs lg:text-4xl text-center mb-5 lg:mb-24">
        álbuns mais ouvidos {getPeriodName()}
      </h3>
      <ul>
        {data.map((item, index) => {
          const artist = item.artist?.name || "[desconhecido]";
          const album = item.name;
          const artistAlbum = `${artist} - ${album}`;

          const truncatedArtistAlbum =
            artistAlbum.length > 30
              ? artistAlbum.substring(0, 30) + "..."
              : artistAlbum;

          return (
            <li
              className="font-['Twentieth'] uppercase text-center text-xs lg:text-4xl leading-normal lg:leading-loose"
              key={index}
            >
              {method === "user.gettopalbums" && truncatedArtistAlbum}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;

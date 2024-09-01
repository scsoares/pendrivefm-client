import { CheckMobile } from "../hooks/CheckMobile";
import rotatingPendrive from "../assets/rotating-pendrive.gif";

export const Title = () => {
  const isMobile = CheckMobile();
  return (
    <>
      {isMobile ? (
        <div>
          <img src={rotatingPendrive} alt="Rotating pendrive" />
          <span className="flex items-center justify-center uppercase text-center text-4xl font-bold mb-5">
            Pendrive.fm
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src={rotatingPendrive} alt="Rotating pendrive" />
          <span className="flex items-center justify-center uppercase text-center text-4xl font-bold mb-10">
            Pendrive.fm
          </span>
        </div>
      )}
    </>
  );
};

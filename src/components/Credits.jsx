import { FaGithub } from "react-icons/fa";

export const Credits = () => {
  return (
    <>
      <div className="bg-base-300 flex flex-col items-center justify-center gap-2 py-14">
        <span>
          © 2024 Feito com <span className="text-red-600 text-2xl">♥</span> por{" "}
          <a className="underline" href="https://last.fm/user/moto-perpetuo">
            Sarah Soares
          </a>
          .
        </span>
        <div className="flex gap-5">
          <a href="https://github.com/scsoares/pendrivefm">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </>
  );
};

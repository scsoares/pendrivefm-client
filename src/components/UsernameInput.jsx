import { useState } from "react";

const UsernameInput = ({ onSubmit }) => {
  const [user, setUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.trim()) {
      onSubmit(user.trim());
      setUser("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row gap-1 items-center lg:px-96 lg:mx-48"
    >
      <label className="mr-5"></label>
      <input
        id="user"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Digite seu user do Last.fm"
        className="border  p-2 rounded mr-2 flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded "
        disabled={!user.trim()}
      >
        Criar
      </button>
    </form>
  );
};

export default UsernameInput;

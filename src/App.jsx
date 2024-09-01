import { useState } from "react";
import UsernameInput from "./components/UsernameInput";
import TopDataDisplay from "./components/TopDataDisplay";
import { Title } from "./components/Title";
import { Credits } from "./components/Credits";

const App = () => {
  const [username, setUsername] = useState(null);

  const handleUsernameSubmit = (user) => {
    setUsername(user);
  };

  return (
    <div className="">
      <Title />
      <UsernameInput onSubmit={handleUsernameSubmit} />
      {username && <TopDataDisplay user={username} />}
      <Credits />
    </div>
  );
};

export default App;

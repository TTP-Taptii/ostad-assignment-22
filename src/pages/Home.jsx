import { useState } from "react";
import RefPractice from "../components/RefPractice";
import UserForm from "../components/UserForm";
import StatePractice from "../components/StatePractice";

const colors = ["#f4f6f8", "#e0f2fe", "#dcfce7", "#fef9c3", "#fce7f3"];

function Home() {
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <div className="page" style={{ backgroundColor: colors[colorIndex] }}>
      <div className="container">
        <h1>Welcome to the User Directory App</h1>
        <p className="subtitle">A small project to practice React Hooks, forms, API calls and routing.</p>
        <button onClick={changeColor}>Change Background Color</button>

        <div className="grid">
          <RefPractice />
          <UserForm />
          <StatePractice />
        </div>
      </div>
    </div>
  );
}

export default Home;

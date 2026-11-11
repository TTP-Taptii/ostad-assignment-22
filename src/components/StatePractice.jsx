import { useState } from "react";

const extraSkills = ["Node.js", "Git", "TypeScript", "Docker"];

function StatePractice() {
  const [user, setUser] = useState({ name: "Rahim", email: "rahim@example.com" });
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);

  const updateName = () => {
    setUser({ ...user, name: "Karim" }); // spread keeps email, changes name
  };

  const addSkill = () => {
    const next = extraSkills[skills.length - 3];
    if (next) setSkills([...skills, next]); // new array, original not modified
  };

  return (
    <div className="card">
      <h3>Object and Array State</h3>

      <p>Name: <strong>{user.name}</strong></p>
      <p>Email: <strong>{user.email}</strong></p>
      <button onClick={updateName}>Update Name</button>

      <h4>Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <button onClick={addSkill} disabled={skills.length - 3 >= extraSkills.length}>
        Add Skill
      </button>
    </div>
  );
}

export default StatePractice;

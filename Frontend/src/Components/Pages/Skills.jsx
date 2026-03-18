import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  const getSkills = async () => {
    try {
      const res = await axios.get("https://portfolio-fute.onrender.com/getskills");
      setSkillsData(res.data.data); 
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch skills");
      setLoading(false);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>

      {loading && <p>Loading skills...</p>}
      {error && <p>{error}</p>}

      <div className="skills-grid">
        {skillsData.map((item) => (
          <div className="skill-card" key={item._id}>
            <h2>{item.category}</h2>
            <p>{item.skills}</p>
          </div>
        ))}
      </div>
      <hr style={{margin:"10px"}} ></hr>
    </div>
  );
};

export default Skills;
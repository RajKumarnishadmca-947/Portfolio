import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'

const Projects = () => {

  const [projData,setProjData]=useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProjects = async () => {
    try {
      const res = await axios.get("https://portfolio-fute.onrender.com//getproject");
      setProjData(res.data); 
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch skills");
      setLoading(false);
    }
  };

  useEffect(()=>{
    getProjects()
  },[])

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Projects</h1>

      {loading && <p>Loading skills...</p>}
      {error && <p>{error}</p>}

      <div className="skills-grid">
        {projData.map((item) => (
          <div className="skill-card" key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a style={{textDecoration:"none"}} href={item.github} target="_blank" rel="noopener noreferrer" className='btn'>
            <button  style={{backgroundColor:"#0082b5",color:"white",border:"none",padding:"8px 15px",borderRadius:"6px",cursor:"pointer", margin:"10px"}}>Source Code</button></a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
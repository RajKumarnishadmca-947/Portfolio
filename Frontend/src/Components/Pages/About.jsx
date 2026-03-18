import { useEffect, useState ,useContext} from "react";
import "../../App.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ct } from "../../App";

const About = () => {
  let [skillsData,setSkillsData]=useState([])
  let [error,setError]=useState("")
// let navigate=useNavigate()
//  let obj=useContext(ct)
//  obj.fun(true)
//  useEffect(()=>{
//    if(!obj.validation)
//      navigate("/")
    
//  },[])

  let getSkill=async()=>{
    try{
      let res=await axios.get("http://localhost:5001/getedu");
      setSkillsData(res.data.data)
    }catch{
      setError("Failed to fetching Skills")
    }
  }

  useEffect(()=>{
    getSkill()
  },[])
  return (
    <div className="about-container">
        <p>{error}</p>
      <div className="about-left">
        <img src="/portfolio_Image_copy.jpeg"  alt="profile" className="about-img"/>
      </div>

      <div className="about-right">
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate <span>MERN Stack Developer</span> and 
          <span> Machine Learning Engineer</span> who loves building modern 
          web applications and intelligent systems. I enjoy solving real-world 
          problems using technology and continuously learning new tools.
        </p>

        <p>
          I specialize in developing full-stack applications using 
          MongoDB, Express.js, React.js, and Node.js. I also work with 
          Python and Machine Learning to build predictive models and 
          data-driven solutions.
        </p>

        <div className="about-skills">
          <div style={{border:"2px solid orange"}}><h2 style={{color:"orange"}}>Education</h2></div>
          
          <div className="skills-grid" style={{ display: "grid",gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", width:"400px"}}>
          {skillsData.map((item) => (
            <div style={{ border: "2px solid blue" }} className="skill-card" key={item._id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
        </div>

      </div>

    </div>
  )
}

export default About;
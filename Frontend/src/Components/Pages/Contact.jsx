import {useState} from "react"
import {FaEnvelope,FaPhone,FaLinkedin,FaGithub} from "react-icons/fa";
import "../../App.css"
import axios from "axios"

const Contact = () => {
  const [msg,setMsg]=useState({name:"",email:"",phone:"",message:""})

  const fun=(e)=>{
    setMsg({...msg,[e.target.name]:e.target.value})
  }

  const sendmsg=async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:5001/addcontact",msg)
      alert(res.data.msg)
      setMsg({name:"",email:"",phone:"",message:""})
    } catch(error){
      alert("Message not sent")
    }
  }

  return (
    <div>
      <h2 style={{color:"white",fontSize:"xx-large"}}>Contact</h2>
      <div className='contactcontainer'>
        {/* Left Section */}
        <div className='contactleft'>
          <div className="text">
            <p>
              <FaEnvelope style={{marginRight:"8px",color:"#0077b5"}} />
              <span>Email:</span>rajkumarnishadmca@gmail.com
            </p>

            <p><FaPhone style={{marginRight:"8px",color:"green"}}/><span>Mobile:</span> 8160940477</p>

            <p><FaLinkedin style={{marginRight:"8px",color:"#0A66C2"}}/><span> LinkedIn:</span> 
            <a href="https://www.linkedin.com/in/rajkumar-nishad-41880b39b/" target="_blank" rel="noreferrer">linkedin</a>
            </p>

            <p><FaGithub style={{marginRight:"8px",color:"black"}}/><span>Github:</span> 
            <a href="https://github.com/RajKumarnishadmca-947" target="_blank" rel="noreferrer"> github</a>
            </p>
          </div>
        </div>

          {/* Right Section */}
        <div className='contactright'>
          <form>
            <div>
              <label>Name:</label><br />
              <input type="text"name="name" value={msg.name} onChange={fun} placeholder="Enter your name"/>
            </div>

            <div>
              <label>Email:</label><br />
              <input type="email" name="email" value={msg.email} onChange={fun} placeholder="Enter your email"/>
            </div>

            <div>
              <label>Phone</label>
              <input type="number" name="phone" value={msg.phone} onChange={fun} placeholder="Enter phone number"/>
            </div>

            <div>
              <label>Message</label>
              <textarea name="message" value={msg.message} onChange={fun} placeholder="Write your message"/>
            </div>

            <button id="btn" onClick={sendmsg}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
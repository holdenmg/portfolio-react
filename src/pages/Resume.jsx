import resume from '../assets/resume.png'
export default function Resume() {
    return (
      <div style={{display: "flex", justifyContent:"space-around" }}>
        <div  style={{width:"700px", marginTop: "90px"}}>
        <img src= {resume} style={{height: "500px", opacity:".85"}} className=""></img>
        <button  class="btn " style={{backgroundColor: "#7C8D85", color: "white", marginTop: "10px", opacity: ".95",}}>Download</button>
        </div>
      </div>
    );
  }
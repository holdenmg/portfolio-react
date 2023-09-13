import git from "../assets/github.svg"
import spotify from "../assets/spotify.svg"
import linked from "../assets/linkedin.svg"

export default function Footer() {
    return (
        <div className="row d-flex justify-content-around" style={{bottom: "10px", right:"10px", position:"fixed"}}>
        
        
        <div className="col">
            <a href="https://github.com/holdenmg">
                <img src={git} />
            </a>
            </div>
            <div className="col">
            <a href="https://www.linkedin.com/in/holden-garrison-60615128b/" >
                <img src={linked} />
            </a>
            </div>
            <div className="col">
            <a href="https://open.spotify.com/user/holdenggggg" >
                <img src={spotify} />
            </a>
            </div>
           

        </div>


    )
}

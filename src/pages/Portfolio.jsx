import PortfolioCard from '../components/PortfolioCard'
import '/index.css'
import neighbor from '../assets/neighbor.png'
import soundquest from '../assets/soundquest.png'

const projects = [
{
  id: 1,
  name: "Neighborhood Safari",
  tech: "Handlebars/Node/NoSQL",
  imgUrl: neighbor,
  gitUrl:"https://github.com/holdenmg/nieghborhood-safari",
  link: "https://gentle-ocean-39436-8a803375c53b.herokuapp.com"
},
{
  id: 2,
  name:"SoundQuest",
  tech:"HTML/JQuery/CSS/JavaScript",
  imgUrl:"assets/soundquest.png",
  gitUrl:"https://github.com/holdenmg/sound-quest",
  link:"https://holdenmg.github.io/sound-quest/",
},
{id: 3,
  name: "TechBlog",
  tech: "Node/Handlebars/NoSQL",
  imageUrl: "",
  gitUrl:"https://github.com/holdenmg/tech-blog",
  link: "https://guarded-tor-22362-c9691c46dfcb.herokuapp.com/"
},
{id: 4,
  name: "Weather Dashboard",
  tech: "HTML/CSS/JavaScript/OpenWeather",
  imageUrl: "",
  gitUrl:"https://github.com/holdenmg/weather-dashboard",
  link: "https://holdenmg.github.io/weather-dashboard"
},


]

export default function Portfolio() {
    return (
      <PortfolioCard projects = {projects} />
    );
  }
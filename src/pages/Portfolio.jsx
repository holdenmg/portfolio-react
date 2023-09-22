import PortfolioCard from '../components/CardPortfolio'
import '/index.css'
import neighbor from '../assets/neighbor.png'
import soundquest from '../assets/soundquest.png'
import tech from '../assets/screenshot.png'
import weather from '../assets/weather.png'
import lawn from '../assets/lawn.png'

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
  imgUrl: soundquest,
  gitUrl:"https://github.com/holdenmg/sound-quest",
  link:"https://holdenmg.github.io/sound-quest/",
},
{
  id: 3,
  name: "TechBlog",
  tech: "Node/Handlebars/NoSQL",
  imgUrl: tech,
  gitUrl:"https://github.com/holdenmg/tech-blog",
  link: "https://guarded-tor-22362-c9691c46dfcb.herokuapp.com/"
},
{
  id: 4,
  name: "Weather Dashboard",
  tech: "HTML/CSS/JavaScript/OpenWeather",
  imgUrl: weather,
  gitUrl:"https://github.com/holdenmg/weather-dashboard",
  link: "https://holdenmg.github.io/weather-dashboard"
},
{id: 5,
  name: "LawnShark",
  tech: "MERN Stack",
  imgUrl: weather,
  gitUrl:"https://github.com/holdenmg/weather-dashboard",
  link: "https://holdenmg.github.io/weather-dashboard"}


]

export default function Portfolio() {
    return (
      <PortfolioCard projects = {projects} />
    );
  }
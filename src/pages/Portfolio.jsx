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
    name: "LawnShark",
    tech: "MERN Stack",
    imgUrl: lawn,
    gitUrl: "https://github.com/Jlausier/LawnShark",
    link: "https://gentle-wildwood-36558-193385005281.herokuapp.com/"
  },
  {
    id: 2,
    name: "Neighborhood Safari",
    tech: "Handlebars/Node/NoSQL",
    imgUrl: neighbor,
    gitUrl: "https://github.com/holdenmg/nieghborhood-safari",
    link: "https://gentle-ocean-39436-8a803375c53b.herokuapp.com"
  },
  {
    id: 3,
    name: "SoundQuest",
    tech: "HTML/JQuery/CSS/JavaScript",
    imgUrl: soundquest,
    gitUrl: "https://github.com/holdenmg/sound-quest",
    link: "https://holdenmg.github.io/sound-quest/",
  },
  {
    id: 4,
    name: "TechBlog",
    tech: "Node/Handlebars/NoSQL",
    imgUrl: tech,
    gitUrl: "https://github.com/holdenmg/tech-blog",
    link: "https://guarded-tor-22362-c9691c46dfcb.herokuapp.com/"
  },
]

export default function Portfolio() {
  return (
    <PortfolioCard projects={projects} />
  );
}
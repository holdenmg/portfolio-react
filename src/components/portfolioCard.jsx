import git from '../assets/github-mark.png'

 function PortfolioCard(props) {
    return (
        <div  style={{marginTop:"175px"}} >
           
            {props.projects.map(item => (
                <div className="work-section"  key={item.id} >
                    <div className="work-card" style={{backgroundImage: `url(${item.imgUrl})`}}>
                        <div className="card-title" style={{color:"#7C8D85", textDecoration:"none", backgroundColor: "#A69A8A"}}>
                        <a href={item.link} style={{color:"#7C8D85", textDecoration:"none"}}>
                            <h2 style={{color:"#7C8D85", textDecoration:"none"}}> {item.name} </h2>
                        </a>
                            <h5 style={{color:"white"}}> {item.tech}</h5>
                        <a href={item.gitUrl}style={{color:"white", textDecoration:"none"}} > 
                            <div > GitHub </div>
                        </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PortfolioCard
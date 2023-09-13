import selfie from '../assets/selfie.png'
export default function About() {
    return (
      <div style={{width: "360px", background: "rgba(109, 129, 118,0.75", textAlign: "center", fontWeight: "bold", color: "#ffffff", marginTop:"25px"}} className= "container rounded">
        <div className = "col" style={{width: "330px"}}>
        <img src = {selfie} className="rounded-circle" style={{height:"300px", marginTop:"10px", marginBottom:"10px"}}></img>
        <p>My name is Holden Garrison. I am from Jacksonville, Florida. I am currently a student at Arizona State University where I am majoring in software engineering.
            </p>
            <p> My previous work experience was in the United States Navy, where I served as a nuclear machinist mate on submarines. I was a member of Reactor Laboratories division, where my responsibilities included maintaining reactor plant and steam plant water chemistry as well as collecting and monitoring radiological data and maintaining appropriate radiological controls. I attended training at Navy Nuclear Training Command in Charleston, SC from 2012-2013 and at NPTU Ballston Spa in Ballston Spa, NY from 2013-2015. After completing training I served on the USS Georgia from 2015-2019 and  then as an instructor at NPTU Charleston from 2019-2022.
                </p>
          </div>
      </div>
    );
  }
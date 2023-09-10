

export default function Contact() {


  return (
    <div className="col-3 text-center" style={{fontWeight: "bold", fontFamily:"helvetica", color: "white", float: "right", marginRight: "7rem", marginTop:"2rem", background: "#A69A8A", padding:"5px", borderRadius: "10px", opacity: ".85"}}>
      
      <form>
  <div className="form-group">
    <label >Email Address</label>
    <input type="email" class="form-control"   placeholder="Enter email"></input>
  </div>
  <div className="form-group">
    <label >Name</label>
    <input type="text" class="form-control"   placeholder="Enter name"></input>
  </div>
  <div className="form-outline">
  <label className="form-label">Message</label>
  <textarea class="form-control" placeholder="Write message" rows="4"></textarea>
 
</div>
 \
  <button type="submit" class="btn " style={{backgroundColor: "#7C8D85", color: "white", marginTop: "10px", opacity: ".95"}}>Submit</button>
</form>
     
    </div>
  );
}


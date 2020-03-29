import React from "react";

function Contact() {
  return (
      <div>
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
        <h1 className="display-4">Contact</h1>
    </div>
</div>


<div className="list-group">
    <h3>Pages</h3>
    <a href="https://github.com/Jamesdavies1" className="list-group-item list-group-item-action"
        target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/jamesbendavies/"
        className="list-group-item list-group-item-action  breakcontact" target="_blank">LinkedIn</a>
</div>


<div className="list-group">
    <h3>Contact info</h3>
    <a href="mailto:james.davies92@icloud.com"
        className="list-group-item list-group-item-action">James.davies92@icloud.com</a>
    <a href="tel:07985284499" className="list-group-item list-group-item-action breakcontact">Mobile: 07985284499</a>
</div>


<div className="list-group">
    <h3>Resume</h3>
    <a href="https://drive.google.com/open?id=1n-DmrtyDygLjvIh7_FW0L3p5HLmbI7B_"
        className="list-group-item list-group-item-action" target="_blank">Resume</a>
    <a href="https://drive.google.com/open?id=1_VgsfOqfmfbSMg5tfouItXp74hvgSUuP"
        className="list-group-item list-group-item-action  breakcontact brandstatement" target="_blank">Brand
        Statement</a>
</div>
</div>
  );
}

export default Contact;

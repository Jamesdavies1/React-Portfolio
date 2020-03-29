import React from "react";



function Home() {
  return (
      <div className="card mb-3 text-center" style={{maxwidth: "540px"}}>
        <div className="row no-gutters justify-content-center">
          <div className="col-md-8">
            <h5 className="card-title">James Davies</h5>
            <img

              src="/images/me.jpeg"
              className="card-img"
              alt="portrait"
            />
            <p className="card-text">
            <br />
            Hello and welcome to my portfolio!
            <br />
            <br />
            Here you will find a collection of the{" "}
            <a href="./projects.html">projects</a> I have created over the past
            6 months throughout my coding bootcamp at{" "}
            <strong>The University Of Manchester</strong>.<br />
            <br />
              On my <a href="./contact.html">contact</a> page, you will find
              direct links to view my CV, telephone and email address, my GitHub
              account and my LinkedIn account.
              <br />
              <br />
                I am looking for a <em>full stack web developer</em> position
                within the north-west.
                <br />
              </p>
          </div>
        </div>
      </div>
  );
}

export default Home;

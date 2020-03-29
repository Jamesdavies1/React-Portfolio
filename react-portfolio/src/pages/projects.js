import React from "react";

function Projects() {
  return (
      <div>
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
        <h1 className="display-4">Projects</h1>
    </div>
</div>

<div className="card project-one text-center" style={{width: 18+"rem"}}>
    <div className="card-body">
        <h5 className="card-title">Movie Mystery</h5>
        <h6 className="card-subtitle mb-2 text-muted">Group Project</h6>
        <p className="card-text">A group project creation. This is a movie quiz / brain training game that uses several
            API's,
            allowing us to gain information from different databases, providing us with the questions and answers
            from our favourite movies!
        </p>
        <a href="https://jamesdavies1.github.io/Project-1---Movie-Mystery/" className="card-link" target="_blank">Webpage</a>
        <a href="https://github.com/Jamesdavies1/Project-1---Movie-Mystery" className="card-link link-right" target="_blank">GitHub</a>
    </div>
</div>

<div className="card project-two text-center" style={{width: 18+"rem"}}>
    <div className="card-body">
        <h5 className="card-title">Day planner</h5>
        <h6 className="card-subtitle mb-2 text-muted">Solo Project</h6>
        <p className="card-text">A calendar style day to day planner that is designed to work with the 9-5 working
            routine.
            Users can plan their days more efficiently and help increase productivity.
        </p>
        <a href="https://jamesdavies1.github.io/Day-Planner/" className="card-link" target="_blank">Webpage</a>
        <a href="https://github.com/Jamesdavies1/Day-Planner" className="card-link link-right"
            target="_blank">GitHub</a>
    </div>
</div>

<div className="card project-three text-center" style={{width: 18+"rem"}}>
    <div className="card-body">
        <h5 className="card-title">Code Quiz</h5>
        <h6 className="card-subtitle mb-2 text-muted">Solo Project</h6>
        <p className="card-text">A simple quiz game where the user has to guess personal information about myself.
            Be warned... You're timed!
        </p>
        <a href="https://jamesdavies1.github.io/code-quiz-homework/" className="card-link" target="_blank">Webpage</a>
        <a href="https://github.com/Jamesdavies1/code-quiz-homework/" className="card-link link-right"
            target="_blank">GitHub</a>
    </div>
</div>

<div className="card project-four text-center" style={{width: 18+"rem"}}>
    <div className="card-body">
        <h5 className="card-title">Password generator</h5>
        <h6 className="card-subtitle mb-2 text-muted">Solo Project</h6>
        <p className="card-text">A randomised password generator that asks the user various questions to perfect their
            desired password. Also contains a button to copy generated password to clipboard.
        </p>
        <a href="https://jamesdavies1.github.io/password-generator/" className="card-link" target="_blank">Webpage</a>
        <a href="https://github.com/Jamesdavies1/password-generator" className="card-link link-right"
            target="_blank">GitHub</a>
    </div>
</div>

<div className="card project-five text-center" style={{width: 18+"rem"}}>
    <div className="card-body">
        <h5 className="card-title">Weather dashboard</h5>
        <h6 className="card-subtitle mb-2 text-muted">Solo Project</h6>
        <p className="card-text">A weather dashboard app that allows users to input their selected cities from anywhere
            across the globe, calling to an API database and receiving various pieces of weather information.
            Also contains a 5 day forecast. (work in progress)
        </p>
        <a href="https://jamesdavies1.github.io/Weather-Dashboard/" className="card-link" target="_blank">Webpage</a>
        <a href="https://github.com/Jamesdavies1/Weather-Dashboard" className="card-link link-right"
            target="_blank">GitHub</a>
    </div>
</div>

<div className="card project-six text-center" style={{width: 18+"rem"}}>
    <div className="card-body">
        <h5 className="card-title">Drip Advisor</h5>
        <h6 className="card-subtitle mb-2 text-muted">Group Project</h6>
        <p className="card-text">Drip Advisor is a brewery based "trip advisor" where the user can sign in, view local
            breweries in their selected area and rate them. A log in feature is present but currently a work in
            progress.
        </p>
        <a href="https://group-project-02.herokuapp.com" className="card-link" target="_blank">Webpage</a>
        <a href="https://github.com/Bethanjames93/bootcamp_beeefcakes" className="card-link link-right"
            target="_blank">GitHub</a>
    </div>
</div>
</div>
  );
}

export default Projects;

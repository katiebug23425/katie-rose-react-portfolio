// import React from "react";
import Project from "./Project";
import techTalk from "../images/techTalk.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
    // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Katie Rose's Tech Talk",
              description: "MVC Tech Blog using Handlebars.js, Sequelize, and Express.js. Users can create an account, log in, create, edit, and delete posts, and comment on other users' posts. Deployed on Heroku.",
              imgSrc: techTalk,
              deployedLink:
                "https://calm-oasis-45287-2e786caef06d.herokuapp.com/",
              githubLink:
                "https://github.com/katiebug23425/model-view-controller-tech-blog",
            },
            // {
            //   title: "",
            //   description: "",
            //   imgSrc: ,
            //   deployedLink:
            //     "",
            //   githubLink:
            //     "https://github.com/",
            // },
            // {
            //   title: "",
            //   description: "",
            //   imgSrc: ,
            //   deployedLink:
            //     "",
            //   githubLink:
            //     "https://github.com/",
            // },
            // {
            //   title: "",
            //   description: "",
            //   imgSrc: ,
            //   deployedLink:
            //     "",
            //   githubLink:
            //     "https://github.com/",
            // },
            // {
            //   title: "",
            //   description: "",
            //   imgSrc: ,
            //   deployedLink:
            //     "",
            //   githubLink:
            //     "https://github.com/",
            // },
            // {
            //   title: "",
            //   description: "",
            //   imgSrc: ,
            //   deployedLink:
            //     "",
            //   githubLink:
            //     "https://github.com/",
            // },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;

// import React from "react";
import Lottie from "lottie-react";
import portfolio from "./portfolio.json";

import Project from "./Project";
import techTalk from "../images/techTalk.png";
import gamersGala from "../images/gamersGala.png";
import topicTarget from "../images/topicTarget.png";
import noteTaker from "../images/noteTaker.png";
import codeQuiz from "../images/codeQuiz.png";
import straightJate from "../images/straightJate.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
    // Portfolio container
    <div className="portfolio-wrapper">
        <div className="lottie-icon-4" style={{ background: "white" }}>
        <Lottie loop={true} animationData={portfolio}></Lottie></div>
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Katie Rose's Tech Talk",
              description: "Katie Rose's Tech Talk is a MVC Tech Blog all about tech. Users can create an account, log in, create, edit, and delete posts, as well as comment on other users' posts. It is a full stack app that allows for creative posts and comments. Create a post today and see what others have to say!",
              imgSrc: techTalk,
              deployedLink:
                "https://calm-oasis-45287-2e786caef06d.herokuapp.com/",
              githubLink:
                "https://github.com/katiebug23425/model-view-controller-tech-blog",
            },
            {
              title: "Gamers Gala",
              description: "A site for planning gaming parties and tracking your gaming collection. Users will be able to log into their account & go to inventory or plan a party, they can manage their collection of games, consoles and controllers.",
              imgSrc: gamersGala,
              deployedLink:
                "https://gamers-gala-185ba9f0e124.herokuapp.com/login",
              githubLink:
                "https://github.com/danpatoneil/Gaming-Database/tree/main",
            },
            {
              title: "Topic Target",
              description: "A single page search engine that allows the top ten results to be shown in article and video formats. Search for topics and get results with corresponding videos and articles displayed on page. Ability to save it to your list for viewing at a later time if desired.",
              imgSrc: topicTarget,
              deployedLink:
                "https://taajl.github.io/Topic-Target-/index.html",
              githubLink:
                "https://github.com/TaajL/Topic-Target-",
            },
            {
              title: "Express Note Taker",
              description: "An application that allows you to write, save and delete notes",
              imgSrc: noteTaker,
              deployedLink:
                "https://kra-express-note-taker-b038d748f005.herokuapp.com/",
              githubLink:
                "https://github.com/katiebug23425/Express-Note-Taker",
            },
            {
              title: "Timed Code Quiz",
              description: "A timed scored quiz with questions about web development with a high score board to keep track of your scores.",
              imgSrc: codeQuiz,
              deployedLink:
                "https://katiebug23425.github.io/timed-quiz/",
              githubLink:
                "https://github.com/katiebug23425/timed-quiz",
            },
            {
              title: "Straight Jate",
              description: "a Progressive Web App that allows users to install app locally & use without internet access to create and keep notes",
              imgSrc: straightJate,
              deployedLink:
                "https://straight-jate.onrender.com/",
              githubLink:
                "https://github.com/katiebug23425/Straight_Jate",
            },
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

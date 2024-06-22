// import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
// import avatar from "../images/life motto.jpg";
import anotherAvatar from "../images/katiebug.jpg";
import "../style/About.css";

function About() {
  return (
    // About section
<section id="about" className="py-5">
  <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
        {/* <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col> */}
          <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <Image src={anotherAvatar} rounded fluid className="about-image-2" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4" style={{ fontSize: '25px', fontWeight: 'bold', color: 'red' }}>
                  All About Katie Rose
                </Card.Title>
                  <Card.Text>
                   I am a full stack developer who is captivated by code, has a passion for programming, a love of learning, who is on a journey through JavaScript as well as a path to learn every other programming language and style, database and relevant topic related to software engineering and programming. I am a double threat as a Fastidious Front-End Fanatic with a Flair for the UI as well as being a Bold Back-End Boss with a penchant for the server side and databases. 
                  </Card.Text>
                  <Card.Text>
                  I am a student of Michigan State University as well as a Web Developer for an automotive company in a Suburb of Detroit, MI. I love all things code and while I do tend to be obsessive about the projects I work on, I am always looking for new ways to learn and grow as a developer. I love the development stage of the project from writing that first line of code to seeing the finished polished masterpiece and it never ceases to amaze me that the gibberish (according to my daughter, I see beautiful code) I write can turn into something so beautiful and functional.
                  </Card.Text>
                  <Card.Text>
                    I have always had a passion for computers but was self taught until MSU, learning and earning my way to the developer position I currently hold. This course has not only greatly improved the skills I had but added vital additional ones that I now see are necessary for a developer to have. I am excited to see where this journey takes me and am looking forward to the challenges that lie ahead. 
                  </Card.Text>
                  <Card.Text>
                    In addition to my passion for programming and computers I hold many interests such as yoga, reading, writing, baking, cooking, hiking, exploring, traveling and of course spending time with my friends and family. I am the mother of an amazing young lady named Adrianna as well as my two dogs Bruno and Bella. We have a beautiful summer home in Northern Michigan that is actually a converted 117 year old church complete with 30 foot ceilings and stained glass windows. I am a lover of all things vintage and antique and have a passion for history and the stories that come with it. I adore traveling and have been to many places in the US and abroad and am always looking for new stamps in my passport & places to explore. I take at least 1 international vacation a year and as many domestic as I can afford! 
                  </Card.Text>
                  <Card.Text>
                    I have been a sales savant my whole life and have been in sales for over 25 years. I also possess extensive marketing and advertising experience which when added to my sales and developer background make me the whole package. Not only can I build it for you I can also market, advertise and sell it for you too! But my true passion lies in the code and the development of the project. I love creating the functional code for the back end and then developing the beautiful front end to go with it.  I try to see the UI from the users point of view, as a layman would and then create it in such a way that is not only functional and beautiful but makes the user appreciative of such a structure, layout and design. I am a true artist at heart and I see code as my canvas.
                  </Card.Text>
                  <Card.Text>
                    I bring a blend of analytical and creative processes together to create something amazing for you and the customer. Developing is an ongoing learning process, skills combined with the ability to work as a team and individually, to take critiques and use them to improve the project and provide the customer and user exactly what they are looking for as well as some things they did not know they needed! Together we can create something incredible!  
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
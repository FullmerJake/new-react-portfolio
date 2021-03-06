import React from 'react';

// import react-bootstrap components
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <>
      <Jumbotron fluid className="mb-5">
        <Container>
          <Row>
            <Col sm={12} md={6}lg={4} className="justify-content-center">
              <Image
                src={require("../assets/image/profilepic.png")}
                roundedCircle
                width="300vw"
                height="300vw"/>
            </Col>
            <Col className="pl-md-5">
                <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
                  Welcome!</h1>
                <p className="text-dark text-center text-md-left h3">
                  My name is Jake Fullmer and I am your new Full Stack Web Developer.
                </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <h3>About Me</h3>
          <p>
            Programming has always been a part of my life, but it wasn't until recently that it became my life! Try as I might, but the call of the computer was never far from me.
          </p>
          <p>
            I got my Bachelors in Stage Management from Brigham Young University, where I spent my college years learning how to most effectively communicate between 2 wildly different personalities within the theatre world.
            My goal now is to use those skills to create a more immersive and connected experience for anyone that comes accross my work. The more unique the experience, the closer we become as a people.
          </p>
          <p>
            So keep that smile on your face and let me know how I can help!
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About;
import React from 'react';

// import react-bootstrap components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function Resume() {
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Skills <span>&amp;</span> Experience</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container className="py-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
        <Button
          href="https://docs.google.com/document/d/1TyGjlQX0RHczDxM0Ocm2q0Hzn0ET2A-OYlekFHNn-DE/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
            View My Resume
        </Button>
      </Container>

      <Container>
        <CardDeck>
          <Card>
            <Card.Body>
              <h3>Frontend Skills</h3>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
              </ul>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h3>Backend Skills</h3>
              <ul>
                <li>RESTful APIs · GraphQL</li>
                <li>MongoDB · Mongoose</li>
                <li>MySQL · Sequelize</li>
                <li>Express · Node.js</li>
              </ul>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </>
  )
}

export default Resume;
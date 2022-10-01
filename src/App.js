
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  return (
    <div className="App">
   
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">full stack Academy </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.cleffex.com/wp-content/uploads/2022/03/What_s_the_Difference_Between_Front_End_Back_End_Full_Stack_Development_4b6daf1356.jpg" />
        <Card.Body>
          <Card.Title>Full-Time Coding Bootcamp</Card.Title>
          <Card.Text>
          You open a new browser tab, type in a URL(for example https://codenest.ng),
           and press enter. The site loads immediately. 
           It nearly takes your breath away with its ultra-clean layout, well-constructed pages, and impressive looks and feels...
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://miro.medium.com/max/1200/1*0KYZcE0u6CRjaAlWJsatjg.jpeg" />
        <Card.Body>
          <Card.Title>Part-Time Coding Bootcamp</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://res.cloudinary.com/adaface/image/upload/v1593601120/blog/images/full_stack_developer_skills_breakdown.png" />
        <Card.Body>
          <Card.Title>Beginner Coding Bootcamp</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Copyright © 2022, Fullstack Academy, LLC.</Card.Title>
        <Card.Text>
        

Fullstack Academy is licensed by the New York State Education Department.

Regulatory Information
Privacy Policy
        </Card.Text>
        <Button variant="primary">Contact Us</Button>
      </Card.Body>
      
    </Card>
      
    </div>
  );
}

export default App;

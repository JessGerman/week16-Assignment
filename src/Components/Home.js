import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
	return (
	  <Accordion>
		<Accordion.Item eventKey="0">
		  <Accordion.Header>Home</Accordion.Header>
		  <Accordion.Body>
			This is a simple website. Unfortunately, I wasn't able to develop as much as I wanted, but I'm going to put time and energy to make it better. It has been really difficult to keep a balance between work and study. 
		  </Accordion.Body>
		</Accordion.Item>
		<Accordion.Item eventKey="1">
		  <Accordion.Header>I won't quit until get it right!</Accordion.Header>
		  <Accordion.Body>
			It's has been really frustrating trying to figure things out. I tried in different ways, put all of them separately to see if the code works and then I tried to conciliate all of them in one doc, but nothing works. I'm so sorry about it!
		  </Accordion.Body>
		</Accordion.Item>
	  </Accordion>
	);
  }
  
  export default AllCollapseExample;
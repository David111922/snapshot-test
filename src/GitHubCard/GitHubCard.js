// import { render, screen } from '@testing-library/react';
// import App from './App';
import React from 'react'
// import renderer from 'react-test-renderer'
// import GitHubCard from './GitHubCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="MeoYo.jpg" />
      <Card.Body>
        <Card.Title>David Miguel Salvat</Card.Title>
        <Card.Text>
        The musical coder
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}



export default GitHubCard
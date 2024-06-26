import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import renderer from 'react-test-renderer'
function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          David Miguel Salvat ...Musical Coder
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;
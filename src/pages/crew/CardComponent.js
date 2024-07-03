import {React, useState, useEffect} from 'react';
import { Card, Placeholder } from 'react-bootstrap';
import './crew.css'
const CardComponent = ({ title, text, imgSrc,}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  
  return (
    <div>
      {isLoading ? (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
            </Card.Body>
          </Card>
      ) : (
        <Card style={{ width: '18rem' }} className='crew-card'>
        {imgSrc && <Card.Img variant="top" src={imgSrc} />}
        <Card.Body>
          <Card.Title className='crew-title'>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
      )}
    </div>
  );
};

export default CardComponent;

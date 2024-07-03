import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent';

const Crew = () => {

  const cardsData = [
    {
      title: 'Ghanashaym AP',
      text: 'VFX Editor',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/ghanu.jpg?alt=media&token=bef1bfb3-93df-4f3d-a7b0-b24ce1b9907a',

    },
    {
      title: 'Navneeth BS',
      text: 'Cinematography',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/navneeth.jpg?alt=media&token=1f65361b-2e5d-4309-a39e-993587a395f6',

    },
    {
      title: 'Nandhu TV',
      text: 'Director',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/nandhu.jpg?alt=media&token=684790a0-6f2a-4040-9601-31a30f4702c2',

    },
    {
        title: 'Joiben Joshi',
        text: 'Designer',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/joiben.jpg?alt=media&token=f1720160-4857-4abd-a8d0-618a83fac4cc',
      },
      {
        title: 'Sreeram R',
        text: 'Cinematography',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/sreeram.jpg?alt=media&token=d5e10ed6-965b-45f0-9d50-112e7195bd7a',
      }
  ];

  return (
    <Container className="d-flex justify-content-center">
      <Row className="justify-content-center">
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} lg={4} className="mb-4 d-flex justify-content-center">
            <CardComponent
              title={card.title}
              text={card.text}
              imgSrc={card.imgSrc}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Crew;

import React, { Component, Fragment } from 'react';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { Jumbotron, Container, Button, Card, Row, Col } from 'react-bootstrap';
import './Home.css';
import henry from '../Images/henry.jpg';
import juuko1 from '../Images/juuko1.jpg';
import y from '../Images/y.jpg';
// import 89 from '../Images/89.jpg';
import juuko from '../Images/juuko.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <section className='aboutUs'>
          <div>
            <LightSpeed left>
              <h1> Nice life</h1>
              <p>app still underdevelopment by the developer</p>
              <img src={henry} alt='No Picture found' />
            </LightSpeed>
          </div>

          <div>
            <Roll right>
              <h1> SoftWare Engineer</h1>
            </Roll>
            <Card className='profile'>
              <Bounce right>
                <Card.Body>
                  Am Full Stack web developer ,I code in multiple Languages
                  like Javascript,React,Node.js,Express.js and php. The blog
                  site is Code in React js, Counterfeit Verification System is
                  both a mobile and web application. The Mobile application
                  helps users identify the authenticity of a product on market
                  based on its QR code, report fake product on the market and
                  offer on-time response about user query on manufacturers
                  supply chains. The web application provides platform for
                  enforcement team to register manufacturers company profiles,
                  manufacturers register their suppliers and add products,
                  allow manufacturers and the enforcement team track and
                  control supply chains, and also allow them view product
                  market analytics
                    <button class='btn btn-indigo rounded-circle '
                    onclick="flip(event)"
                  >
                    Read more
                    </button>
                </Card.Body>
              </Bounce>
            </Card>
          </div>
         </section>

        <section className='posts' id='posts'>
          <h1 className='center'>Posts</h1>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <MDBBtn tag='a' size='sm' floating gradient='purple'>
                  <MDBIcon icon='bolt' />
                </MDBBtn>

                <Card.Body>
                  <Card.Title>Feeds From Favorite Youtube Channel</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <MDBBtn tag='a' size='sm' floating gradient='purple'>
                  <MDBIcon icon='bolt' />
                </MDBBtn>
                <Card.Body>
                  <Card.Title>Tweets From twiter</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <MDBBtn tag='a' floating gradient='peach'>
                  <MDBIcon icon='leaf' />
                </MDBBtn>
                <Card.Body>
                  <Card.Title>
                    News Feeds from Medium.com about Rect.js and Node.js and
                    Express.js
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section id="gallery">
          <Row>
            
          </Row>
        </section>

      </Container>
    );
  }
}

export default Home;

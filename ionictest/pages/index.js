import Head from 'next/head';
import Image from 'next/image'

import SimpleLayout from '../components/layout/simple';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image from '../public/image.png';
export default function Home(initialData) {
  return (
    <SimpleLayout>
      <Container fluid>
  <Row className="heroSection">
    <Col>
      <h2 className="titleOne">Your best work.</h2>
      <h2 className="titleTwo">Done together.</h2>
      <p className="heroBody">Build better a business, faster. Start sharing your work across your company—in realtime.</p>
      <div className="mb-2">
      <Button  className="heroBtn1" size="lg">
        TRY IT FREE
      </Button>
      <Button className="heroBtn2" size="lg">
        DOWNLOAD
      </Button>
  </div>
    </Col>
    <Col>
  <Image src={image} alt="Picture of 2 people talking"/>
    </Col>
  </Row>
  <Row className="SectionTwo">
      <Col>
        <h5>FWEATURES</h5>
        <h2>A better way to work together</h2>
        <p>Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </Col>
      <Row>
        
        <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        
      </Row>
      <Row>
        
        <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        
      </Row>

  </Row>

  </Container>
    </SimpleLayout>
  )
}
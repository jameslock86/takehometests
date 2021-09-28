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
  <Row>
    <div className="cta"> 
  <Col>
    <div>
      <h4>Ready to start?</h4>
      <h4>Sign up for free today.</h4>
    </div>
  </Col>
  <Col>
    <div>
      <div className="mb-2">
        <Button  className="heroBtn1" size="lg">
          TRY IT FREE
        </Button>
        <Button className="heroBtn2" size="lg">
          DOWNLOAD
        </Button>
      </div>
    </div>
    
    </Col>
  </div>
  </Row>
  <Row>
  <div className="d-flex flex-column h-100 footer">

<footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
        <div className="row gy-4 gx-5">
        <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <div class="container-fluid">
                  <div class="row d-flex ">
                      <div class="">
                          <input type="email" class="form-control py-3" id="inp1" placeholder="Enter email address"/> 
                      </div>
                   <div class="">
                     <button class="btn text-white px-4 py-2"> OK </button>
                  </div>
                </div>
            </div>
            </div>
        </div>
    </div>

</footer>
</div>

  </Row>

  </Container>
    </SimpleLayout>
  )
}
import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-center w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-info'> Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia atque pariatur temporibus, omnis, animi corrupti, error doloremque laboriosam sed illo hic ratione quasi? Non provident nemo ab, praesentium doloremque harum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet rem quaerat debitis dolores porro obcaecati praesentium, quisquam suscipit assumenda sint, quas officiis facere nobis velit placeat. Neque libero veritatis deleniti?</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'>Get Started</button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img className='img-fluid w-75 ' src="https://miro.medium.com/v2/resize:fit:1400/1*f7cZomxEUsR2AYQVlUXZog.gif" alt="" />
          {/* https://i.gifer.com/origin/6d/6db3d77d8ff976feb206d7e7c64572a6.gif */}
        </Col>
      </Row>
      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='cards  mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Watching History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>


    </>
  )
}

export default LandingPage
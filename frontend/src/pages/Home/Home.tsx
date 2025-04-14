import React from 'react';
import { Carousel, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { EventCarousel } from '../../component/EventCarousel'
import {homeEvents} from '../../dammyData' 


const Home = () => {
  return (
    <div className="App">
      {/* Carousel Section */}
      <Carousel>
        {homeEvents.map((event) => (
          <Carousel.Item key={event.id}>
            <div className="carousel-image-container">
              <img
                className="d-block w-100 carousel-image"
                src={event.image}
                alt={event.title}
              />
            </div>
            <Carousel.Caption>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <Button variant="primary">Learn More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Event Cards Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Upcoming homeEvents</h2>
        <Row>
          {homeEvents.map((event) => (
            <Col key={event.id} md={4} className="mb-4 hover" >
              <Card style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                <div className="card-image-container" >
                  <Card.Img variant="top" src={event.image} className="card-image" />
                </div>
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


      <EventCarousel />


      <section className="py-5">
        <div className="container">
          {/* Headings */}
          <div className="text-center mb-5">
            <h1
              className="mb-3"
              style={{
                color: "#2D3648",
                fontSize: "2.5rem",
              }}
            >
              Already Have Your Plan Set But Don't Know How to Start?
            </h1>
            <h2
              style={{
                color: "#6B7299",
                fontSize: "1.5rem",
              }}
            >
              Checkout these Tools Might be of your Interest
            </h2>
          </div>
          {/* Cards Container */}
          <div className="row g-4">
            {/* Vendors Card */}
            <div className="col-12 mb-4">
              <div
                className="card border-0 rounded-4 position-relative overflow-hidden"
                style={{
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                <div className="card-body p-4 d-flex justify-content-between align-items-center">
                  <div className="col-lg-6 position-relative z-1">
                    <h3
                      className="mb-3"
                      style={{
                        color: "#2D3648",
                        fontSize: "2rem",
                      }}
                    >
                      Vendors
                    </h3>
                    <p
                      className="mb-4"
                      style={{
                        color: "#6B7299",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc
                    </p>
                    <button
                      className="btn btn-primary px-4 py-2 rounded-3"
                      style={{
                        backgroundColor: "#1D6AE5",
                        border: "none",
                        fontSize: "1rem",
                      }}
                    >
                      Start Your Search
                    </button>
                  </div>
                  <div className="position-absolute end-0 top-0 h-100 w-50">
                    <div
                      className="h-100 w-100 position-relative"
                      style={{
                        background: "#F8F9FC",
                        borderRadius: "0 0 0 100%",
                        overflow: "hidden",
                      }}
                    >
                      {/* Image container for Vendors */}
                      <div
                        className="w-100 h-100 position-absolute"
                        style={{
                          top: 0,
                          left: 0,
                        }}
                      >
                        {/* Uncomment and add your image URL */}
                        <img
                          src="music-event.jpg"
                          alt="Vendors illustration"
                          className="w-100 h-100"
                          style={{
                            objectFit: "cover",
                            borderRadius: "0 0 0 100%"
                          }}
                        />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Planning Tools Card */}
            <div className="col-12">
              <div
                className="card border-0 rounded-4 position-relative overflow-hidden"
                style={{
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                <div className="card-body p-4 d-flex justify-content-between align-items-center">
                  <div className="position-absolute start-0 top-0 h-100 w-50">
                    <div
                      className="h-100 w-100 position-relative"
                      style={{
                        background: "#F8F9FC",
                        borderRadius: "0 100% 0 0",
                        overflow: "hidden",
                      }}
                    >
                      {/* Image container for Planning Tools */}
                      <div
                        className="w-100 h-100 position-absolute"
                        style={{
                          top: 0,
                          left: 0,
                        }}
                      >
                        {/* Uncomment and add your image URL */}
                        <img
                          src="event-themes-featured.jpg"
                          alt="Planning Tools illustration"
                          className="w-100 h-100"
                          style={{
                            objectFit: "cover",
                            borderRadius: "0 100% 0 0"
                          }}
                        />

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ms-auto position-relative z-1">
                    <h3
                      className="mb-3"
                      style={{
                        color: "#2D3648",
                        fontSize: "2rem",
                      }}
                    >
                      Planning Tools
                    </h3>
                    <p
                      className="mb-4"
                      style={{
                        color: "#6B7299",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc
                    </p>
                    <button
                      className="btn btn-primary px-4 py-2 rounded-3"
                      style={{
                        backgroundColor: "#1D6AE5",
                        border: "none",
                        fontSize: "1rem",
                      }}
                    >
                      Discover Your Tools
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home

import React from "react";
import TeamSection from "./TeamMembers";
import { Container, Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {events} from '../../dammyData' 
import {stats} from '../../dammyData' 


import "./About.css";



const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  return (
    <div style={{ marginTop: "100px" }}>
      <Container className="text-center d-flex flex-column align-items-center justify-content-center my-5 ">
        <h2 className="section-title">
          We <span className="highlight">Create Events</span> That Lasts
        </h2>
        <p className="section-description">
          From Wedding Functions to Birthday Parties or Corporate Events to
          Musical Functions, We offer full range of Events Management Services
          that scale to your needs & budget.
        </p>

        <Row className="justify-content-center  mt-4" style={{ width: "80%" }}>
          {events.map((event, index) => (
            <Col
              md={4}
              key={index}
              className="d-flex flex-column align-items-center"
            >
              <Card className="event-card">
                <div style={{ position: "relative" }}>
                  <Card.Img variant="top" src={event.image} />
                  <div className="underline"></div>
                </div>
                <Card.Body>
                  <Card.Title className="event-title">{event.title}</Card.Title>
                  <Card.Text className="event-description">
                    {event.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div
        ref={ref}
        className="position-relative text-white py-5"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661353286086-417ac1658f06?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "180px",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-50"
          style={{ backgroundColor: "#0D6EFE", zIndex: "10" }}
        ></div>
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3" style={{ zIndex: "11" }}>
              <h2 className="fw-bold display-4">
                {inView ? (
                  <CountUp start={0} end={stat.number} duration={3} />
                ) : (
                  0
                )}
              </h2>
              <div
                className="my-2 mx-auto"
                style={{
                  width: "40px",
                  height: "2px",
                  backgroundColor: "white",
                }}
              ></div>
              <p className="fs-5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <TeamSection />
    </div>
  );
};

export default About;

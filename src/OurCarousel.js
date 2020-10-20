import React from "react";
import Carousel from "react-bootstrap/Carousel";

const OurCarousel = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            style={{ "maxHeight": "95vh" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1544551763-8dd44758c2dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="display-5">
              The BEST 5* PADI Dive Centre based in the Cloud!{" "}
            </h1>
            <p>Join us in the sky and in the sea</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ "maxHeight": "95vh" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="display-5">Transform your life today and dive in!</h1>
            <p>Start the first day of the rest of your life</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ "maxHeight": "95vh" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="display-5">
              Invite a friend to get certified and get a free dive on us!{" "}
            </h1>
            <p>Get your buddies involved and dive for free!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default OurCarousel;

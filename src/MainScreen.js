import React, { useState, useContext } from "react";
import AppContext from "./AppContext";
import { Link } from "react-router-dom";
import Mailchimp from "react-mailchimp-form";
import "./App.css";
import OurCarousel from "./OurCarousel";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const MainScreen = () => {
  

  return (
    <div className="screen">
      <OurCarousel />
      <Jumbotron
        href="services"
        title="Our Services"
        text="Leave your stresses behind and get wet today! "
      />
      <div className="container-cards">
        <Card
          title="PADI Open Water Course"
          text="Take your first breathes underwater and dive with a buddy upto 18m!"
          btnLabel="Dive in now!"
          cardImage="https://images.unsplash.com/photo-1544642058-2d2bfc88a86a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          title="PADI Advanced Open Water Course"
          text="Take your adventures to the next level and get certified to 30m!"
          btnLabel="Level Up!"
          cardImage="https://images.unsplash.com/photo-1574681289998-05cd669af0b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          title="PADI Rescue Diver Course"
          text="Earn the respect from all other divers on the boat. Prevent emergencies, save lives! "
          btnLabel="Join Today"
          cardImage="https://cdn.divemall.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/d/i/diveshop.ae-service-image-rescuedivercourse-01.jpg"
        />
        <Card
          title="PADI Divemaster"
          text="Turn PRO today! The ultimate course for all enthusiasts! A definite must!"
          btnLabel="Go PRO!"
          cardImage="https://www.hertsdiveclub.co.uk/wp-content/uploads/2017/12/padi-divemaster.jpg"
        />
      </div>
      <Jumbotron
        title="Keep up to date"
        para="Leave your email address below to find out more"
      ></Jumbotron>

      <Mailchimp
        action="https://gmail.us17.list-manage.com/subscribe/post?u=df873d65a5bf71549a102fdd0&amp;id=b2970616fa"
        //Adding multiple fields:
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
          {
            name: "FNAME",
            placeholder: "First name",
            type: "text",
            required: true,
          },
          {
            name: "LNAME",
            placeholder: "Last name",
            type: "text",
            required: true,
          },
        ]}
        // Change predetermined language
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "Please submit an e-mail",
          duplicate: "Too many subscribe attempts for this email address",
          button: "Join Us",
        }}
        // Add a personalized class
        className="mailchimp"
      />
    </div>
  );
};

export default MainScreen;

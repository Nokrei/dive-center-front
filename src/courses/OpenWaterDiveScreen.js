import React from "react";
import Jumbotron from "../Jumbotron";
import Image from "react-bootstrap/Image";
import CourseInfo from "../CourseInfo";
const OpenWaterDive = () => {

  return (
    <div className="screen">
      <center>
        <Image
          src="https://www.twofishdivers.com/wp-content/uploads/2019/11/EN-OpenWater-Blog-Post-1200x600.jpg"
          style={{ "max-height": "95vh" }}
          className="d-block w-100"
        />
        <Jumbotron trip="PADI Open Water Diver Course"></Jumbotron>

        <CourseInfo
          title="The way the world learns to dive"
          text="Get your PADI scuba certification together with us at Yellow Lions Dubai. If you’ve always wanted to learn how to scuba dive, discover new adventures or simply see the wondrous world beneath the waves, this is where your underwater adventures starts. The most popular diving course in the world! PADI Open Water Diver is the first level of PADI scuba certification that allows you to dive independently with a certified buddy on successful completion of the course."
          text1="The course includes theory sessions, skills practice in our huge training pool and 4 open water dives some of Dubai’s prime dive sites, all under the guidance of one of our world class PADI Instructors. Courses are not rushed to give you enough time to build your confidence and practice your skills. Making the most of the electronic learning tools from PADI will give you the maximum amount of time in the water which will make you a safer diver and of course be way more fun."
          text2="On completion of the course you will be certified as a PADI Open Water Diver. This internationally recognized qualification is your ticket to dive the world and will give you a good foundation to continue your dive education and experience new adventures in Dubai and the rest of the world. It is the first step towards continuing education such as the PADI Advanced Open Water course and specialty diving programs which will refine your skills based on your interests."
          text3="We always teach in small groups to allow personal service and attention to each students needs. If you would like one on one instruction or you would like to spread out your training this can easily be accommodated. If you would like to review the theory in person with our multilingual instructors this can be done with an extra day added to the course."
        ></CourseInfo>
      </center>
    </div>
  );
};

export default OpenWaterDive;

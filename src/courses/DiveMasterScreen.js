import React from "react";
import Jumbotron from "../Jumbotron";
import Image from "react-bootstrap/Image";
import CourseInfo from "../CourseInfo";

const DiveMaster = () => {
  return (
    <div className="screen">
      <center>
        <Image
          src="https://www.diversdownuae.com/wp-content/uploads/2018/04/Florian-Divemaster.jpg"
          style={{
            "maxHeight": "95vh",
          }}
          className="d-block w-100"
        />
        <Jumbotron trip="PADI Divemaster Course"> </Jumbotron>
        <CourseInfo
          title="The way the world learns to dive"
          text="Learn to love your job and Go Pro with Yellow Lions Divers Dubai. Are you passionate about diving and love to share that passion with others?"
          text1="At Yellow Lions Divers Dubai we conduct our Divemaster programs as an internship where you can truly immerse yourself in the dive industry and achieve your full potential as a dive professional. During your Divemaster Internship you will work with real certified divers and students under the direct supervision of our senior instructor team and be mentored by our Platinum PADI Course Directors. We can teach all our Internships in English, Spanish, German, Dutch, Danish and Indonesian."
          text2="As you progress through your Divemaster course, you’ll expand your diving knowledge and skills and increase your confidence developing the most important skill of all – good judgement. You complete water skills and stamina exercises, training exercises that stretch your ability to organize and solve problems, as well as helping others to improve their scuba. You put this knowledge into action through a structured internship or series of practical training exercises.This takes time and practice and we generally recommend Divemaster Internships of minimum 6 weeks. Such is our dedication to training that our Divemaster Internships have NO TIME LIMIT! As long as you want to learn we want to teach! We are happy to build bespoke Divemaster packages that will fit your time frame and interests so please drop us a message for more information."
          text3="As a PADI Divemaster, you’ll use these attributes to lead, mentor and motivate other divers, and experience the joy of seeing them transformed by the majesty of the aquatic realm. Are you ready to become the next professional Ambassador for the Ocean? The PADI Divemaster Course will be your first step in the right direction towards a successful diving career."
        ></CourseInfo>
      </center>
    </div>
  );
};

export default DiveMaster;
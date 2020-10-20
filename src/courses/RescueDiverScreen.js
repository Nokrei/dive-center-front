import React from "react";
import Jumbotron from "../Jumbotron";
import Image from "react-bootstrap/Image";
import CourseInfo from "../CourseInfo";

const RescueDiver = () => {
  return (
    <div className="screen">
      <center>
        <Image
          src="https://www.intothebluediving.com/wp-content/uploads/2019/12/1372601-605837-34.jpg"
          style={{
            "maxHeight": "95vh",
          }}
          className="d-block w-100"
        />
        <Jumbotron trip="PADI Rescue Diver Course"></Jumbotron>
        <CourseInfo
          title="The way the world learns to dive"
          text="The PADI Rescue Diver course makes the subject of accident prevention and management rewarding, enjoyable and fun. As well as building self confidence and self reliance, this course takes your focus beyond yourself to make diving safer for others. During the course you will learn essential skills to recognize and prevent potential diving accidents; and how to handle them if they do occur. This is where you get to play hero for 3 days practicing saving divers in need of help."
          text1="We start by building a foundation knowledge of diving injuries and accidents and how to prevent or avoid them. Moving on to spotting signs and triggers of diver stress. Finally on to how to handle different types of diving emergencies. The course is built on the idea that there is no “one way” to rescue another diver but on effective identification of diving problems and give you the tools and techniques to handle those situations with what you have to hand."
          text2="We teach rescue skills in our huge training pool which will allow you time to get to grips with different rescue techniques before moving to the open water where we apply these skills in “real scenarios”. Whether you are looking to increase your own comfort level or thinking of taking the step into pro level training the PADI Rescue Diver Course will give you a great platform."
        ></CourseInfo>
      </center>
    </div>
  );
};

export default RescueDiver;
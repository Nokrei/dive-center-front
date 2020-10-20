import React from "react";
import Jumbotron from "../Jumbotron";
import Image from "react-bootstrap/Image";
import CourseInfo from "../CourseInfo";

const AdvancedOpenWaterDiverCourse = () => {
  return (
    <div className="screen">
      <center>
        <Image
          src="https://scontent.ffjr1-6.fna.fbcdn.net/v/t1.0-9/66588155_10157205129417988_2208041746275762176_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=gmuH0sj_xDwAX8tCqrh&_nc_ht=scontent.ffjr1-6.fna&oh=0d5d97660896a9e39ededf4b422d0989&oe=5FAC9833"
          style={{ "maxHeight": "95vh" }}
          className="d-block w-100"
        />
        <Jumbotron trip="PADI Advanced Open Water Diver Course"></Jumbotron>
        <CourseInfo
          title="The way the world learns to dive"
          text="Your adventure continues, The Advanced Open Water Course is the next step after your Open Water Course and gives you the chance to sample some of diving’s most popular specialities whilst improving your dive skills, making you a safer and more confident diver."
          text1="The Advanced Open Water Course is a more “hands on course” with lots of fun tasks added to everyday diving skills. Certification requires 5 dives, 5 knowledge reviews (no exam!) and can take as little as 2 days to complete. The new PADI electronic learning materials are incorporated to give more time diving, putting into practice the skills required of more advanced and beautiful dive sites."
          text2="The programs 2 core dives are the Deep Dive and Underwater Navigation Dive, whilst your further 3 elective dives can be chosen from a long list! Follow your own interests – Do you want to learn more about fish species? Improve your buoyancy?  Would you like to try sidemount diving? Love wrecks? How about diving at night? Passionate about conservation? All of this can be achieved on the PADI Advanced Open Water Diver Course in Dubai. Please refer to the Specialities page to view a full list of elective dives that are available. On completion of the course you will be certified to dive to a maximum depth of 30m."
          
        ></CourseInfo>
      </center>
    </div>
  );
};

export default AdvancedOpenWaterDiverCourse;
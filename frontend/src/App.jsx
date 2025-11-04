import { useEffect, useState } from "react";
import Avatar from "./components/avatar";
import imgAvatar from "./assets/lffy.jpg";
import AboutSection  from "./components/personal_info_card";
import MyStackSection from "./components/stacks";
import MyEduSection from "./components/education";
import WorkHistorySection from "./components/work_history";
import MyProjectSection from "./components/my_project";

export default function App() {
  return (
    <div className="page">
      <div className="center-box">
        <Avatar
          img={imgAvatar}
          name="Tuấn"
          role="Software Developer"
          birthday="15 March 1999"
          phone="0909 123 456"
          facebook="https://www.facebook.com/huynh.anh.tuan.859337/"  
        />
        <AboutSection />
        <MyStackSection />
        <MyEduSection />
        <WorkHistorySection />
        <MyProjectSection />
      </div>
    </div>
  );
}


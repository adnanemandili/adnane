import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { graduations } from "../constants"; // Assuming you have a 'graduations' constant defined
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

interface Graduation {
  date: string;
  icon: string;
  iconBg: string;
  diploma: string;
  college_name: string;
}

interface GraduationCardProps {
  graduation: Graduation;
}

const GraduationCard: React.FC<GraduationCardProps> = ({ graduation }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={graduation.date}
      iconStyle={{ background: graduation.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={graduation.icon}
            alt={graduation.college_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {graduation.diploma}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {graduation.college_name}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Education: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText} text-center`}>
          Where and What I have Studied
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {graduations.map((graduation: Graduation, index: number) => (
            <GraduationCard
              key={`graduation-${index}`}  
              graduation={graduation}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");

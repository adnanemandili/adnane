import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { graduations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

interface EducationData {
  diploma: string;
  college_name: string;
  icon: string;
  iconBg: string;
  date: string;
  address: string;
}

const EducationCard = ({ graduation }: { graduation: EducationData }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={`${graduation.date}\n${graduation.address}`} // Concatenated date and address
      iconStyle={{ background: graduation.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={graduation.icon}
            alt={graduation.college_name}
            className="w-[100%] h-[100%] object-contain"
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

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText} text-center`}>
          Where and What I learned
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education and Diplomas
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {graduations.map((graduation, index) => (
            <EducationCard
              key={`graduation-${index}`}
              graduation={graduation}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "formation");

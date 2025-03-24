import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import PatternBackground from "./PatternBackground";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#112240",
        color: "#e6f1ff",
        border: "1px solid rgba(100, 255, 218, 0.2)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}
      contentArrowStyle={{ borderRight: "7px solid #112240" }}
      date={experience.date}
      iconStyle={{ background: "#0a192f", border: "2px solid rgba(100, 255, 218, 0.2)" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#e6f1ff] text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[#8892b0] text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#8892b0] text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className="relative z-10">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience.
          </h2>
        </motion.div>

        <div className='mt-20 flex flex-col'>
          <VerticalTimeline lineColor="rgba(100, 255, 218, 0.2)">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

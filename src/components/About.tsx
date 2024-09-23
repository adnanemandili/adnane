import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

interface Service {
  title: string;
  icon: string;
}

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
  options: {
    max: number;
    scale: number;
    speed: number;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon, options }) => {
  return (
    <Tilt options={options} className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Profile</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I'm Adnane Mandili, a final-year software engineering student at ENSIAS, passionate about DevOps and system automation. As a DevOps researcher and enthusiast, I specialize in developing scalable solutions and problem-solving, particularly in Java and cloud technologies. I have hands-on experience with Spring Boot, cloud computing, and system integration. Currently working on my PFE thesis, I’m seeking opportunities to apply my technical skills to real-world projects, especially in software engineering and DevOps environments. I thrive in collaborative teams and am driven by continuous learning and innovation.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service: Service, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} options={{ max: 45, scale: 1, speed: 450 }} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");

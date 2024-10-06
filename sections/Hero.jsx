'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          UnGravity
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <h3 className={styles.heroHeading}>Bio + AI </h3>
        </motion.div>
        {/* Call to Action Button */}
        <motion.div
          variants={textVariant(1.4)}
          className="relative w-full flex justify-center mt-8"
        >
          <button type="button"
            className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-purple-500 transition duration-300"
            onClick={() => { window.location.href = '/analyzer'; }}
          > TRY IT
          </button>
        </motion.div>

      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px] 2xl:pl-[280px]"
      >
        <motion.img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          animate={{ rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
            <motion.img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, repeatType: 'loop' }}
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;

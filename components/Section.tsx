import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionHeader } from './SectionHeader';
import { MotionBox } from './MotionBox';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  [key: string]: any;
}
export const Section: React.FC<Props> = ({
  title,
  description,
  children,
  ...rest
}: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={{
        hidden: {
          y: 30,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        damping: 5,
        mass: 1,
      }}
      maxW='8xl'
      w='100%'
      minH='100%'
      my='3rem'
      {...rest}
    >
      <SectionHeader title={title} description={description} />
      {children}
    </MotionBox>
  );
};

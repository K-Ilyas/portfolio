import React, { useRef } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typical from 'react-typical'
import MovingText from 'react-moving-text'


const Hero = (props) => {
  const TypingAnimation = React.memo(() => {
    return <Typical
      loop={Infinity}
      wrapper="p"
      steps={
        [
          'I\'m a Full Stack developer',
          1200,
          'I\'m a Front-End developer',
          1200,
          'I\'m a Back-End developer',
          1200,
        ]
      }
    />
  }, (props, prevProp) => true);
  return (
    <>

      <Section row nopadding >
        <LeftSection>
          <SectionTitle main center>
            Hi, I'm <span style={{ color: "red" }}>Ilyas Kritet</span><br />
            <TypingAnimation />
          </SectionTitle>
          <SectionText >
            Tech student at the University of corse, able to work in different platforms using varying technologies and frameworks (Web development, Mobile development and Database development).
          </SectionText>
          <Button onClick={() => window.location = 'https://www.linkedin.com/in/ilyas-kritet-697a571b3/'}>Learn More</Button>
        </LeftSection>

      </Section >
    </>
  )
};

export default Hero;
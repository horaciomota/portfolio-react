import React from 'react';
import InfoCard from '../components/InfoCard';
import GetInTouch from '../components/GetInTouch';
import "../styles/about_styles/about.modules.scss";

function About() {
  return (
    <section className="About-section">
      <div className="container">
        <div className='list-comp'>
        <InfoCard
          title="About Me"
          subtitle="I’m a Swedish, Lead Designer & Design Director currently based in Brisbane, Australia. I love what I do and have done so for the last 20 years working on various projects and brands around the world. As a director, I draw upon my experience in design, concept development and team management to bring a comprehensive and creative process to all projects."
          isAboutMe={true}

        />
        <InfoCard
          title="I’ve designed and directed for:"
          titleClassName="custom-title"
          items={[
            "Disney",
            "Star Wars",
            "The Ellen Show",
            "Warner Brothers"
          ]}
        />
        </div>
        <div className='border-divider'></div>

        <GetInTouch/>

      </div> 
    </section>
  );
}

export default About;

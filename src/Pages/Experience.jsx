/* eslint-disable react/react-in-jsx-scope */
import InfoCard from '../components/InfoCard';
import '../styles/about_styles/about.modules.scss';

function About() {
  return (
    <section className="About-section">
      <div className="container">
        <div className="list-comp">
          <InfoCard
            title="Experience"
            subtitle="I’m a Swedish, Lead Designer & Design Director currently based in Brisbane, Australia. I love what I do and have done so for the last 20 years working on various projects and brands around the world. As a director, I draw upon my experience in design, concept development and team management to bring a comprehensive and creative process to all projects."
            isAboutMe
          />
          <InfoCard
            title="Quick summary of my career:"
            titleClassName="custom-title"
            items={[
              '20 years design experience',
              '6 years at Disney & Star Wars',
              '12 years at digital agencies',
              '9 years of directing',
            ]}
          />
        </div>
        <div className="border-divider" />

      </div>
    </section>
  );
}

export default About;

/* eslint-disable react/react-in-jsx-scope */
import InfoCard from '../components/InfoCard';
// import GetInTouch from '../components/GetInTouch';
import '../styles/about_styles/about.modules.scss';

function About() {
  return (
    <section className="About-section">
      <div className="container">
        <div className="list-comp">
          <InfoCard
            title="About Me"
            subtitle="I'm a Portuguese Fullstack Developer. I love what I do and have been doing so for the last year, working on various projects with different people all around the world. As a full-stack developer, I draw upon my experience in design, concept and development. In my GitHub repository, you can find several different projects ranging from frontend, mobile, to fullstack. Most of them I built using React, Next.js, Swift, and Firebase."
            isAboutMe
          />
          <InfoCard
            title="Companies that i have worked for:"
            titleClassName="custom-title"
            items={[
              'UpWork - Freelancer',
              'Adentis',
            ]}
          />
        </div>
        <div className="border-divider" />

        {/* <GetInTouch/> */}

      </div>
    </section>
  );
}

export default About;

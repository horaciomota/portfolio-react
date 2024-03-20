/* eslint-disable react/react-in-jsx-scope */
import InfoCard from '../components/InfoCard';
import '../styles/about_styles/about.modules.scss';

function About() {
  return (
    <section className="About-section">
      <div className="container">
        <div className="list-comp">
          <InfoCard
            title="Technologies"
            subtitle="I utilize a diverse range of technologies in my work, including JavaScript, React, Next.js, Swift, Node.js, Firebase, MongoDB, HTML, CSS, Tailwind CSS, Git, and GitHub."
            isAboutMe
          />
          <InfoCard
            title="Quick summary of my career:"
            titleClassName="custom-title"
            items={[
              '7 months internship @Adentis',
              '2 apps launched at Apple Store',
              '4 open source projects contributed',
              '14 clients on UpWork',
            ]}
          />
        </div>
        <div className="border-divider" />

      </div>
    </section>
  );
}

export default About;

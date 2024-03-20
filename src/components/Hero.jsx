/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/hero_styles/hero.modules.scss';

export default function Hero() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <section className="Hero-section">

      <div className="container">
        <h1>Horacio</h1>
        <div className="Hero-information">
          <div className="Hero-position">
            <h2>/Full Stack developer</h2>
            <h2>/OpenSource Contributor</h2>
          </div>
          <div className="Hero-sumary-links">
            <p>20 years design experience. Based in Brisbane, AUS 03:48 AM. Get in touch for availability.</p>
            <div className="list">
              <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Github</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">About me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

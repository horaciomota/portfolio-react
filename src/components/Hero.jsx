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
            <h2>/Full Stack Developer</h2>
            <h2>/OpenSource Contributor</h2>
          </div>
          <div className="Hero-sumary-links fadeIn">
            <p>7 months of professional experience and recently graduated in Computer Science, I am constantly running personal projects and contributing to the open-source community. When Im not coding, you can find me playing poker.</p>
            <div className="list">
              <ul>
                <li><a href="https://www.linkedin.com/in/horaciomota/">LinkedIn</a></li>
                <li><a href="https://github.com/horaciomota">Github</a></li>
                <li><a href="#">Check my Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

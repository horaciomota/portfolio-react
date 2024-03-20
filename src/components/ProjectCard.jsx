/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '../styles/projects_styles/projects.modules.scss';
import Button from './Button';

export default function ProjectCard({
  tecstack, status, title, description, thumbSrc, gifSrc,
}) {
  return (
    <section className="project-section">
      <div className="container">
        <div className="projetos">
          <div className="project-sumary fadeIn">
            <span>{status}</span>
            <h1>{title}</h1>
            <span className="tecstack">{tecstack}</span>
            <h4>{description}</h4>

            <div className="button-container">
              <a href="#" target="_blank" rel="noopener noreferrer"><Button text="Github" className="github space-between" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Button text="Live demo" className="Live-demo" /></a>
            </div>
          </div>

          <div className="project-img">
            <img src={thumbSrc} alt={`${title} thumb`} className="thumb" />
            <img src={gifSrc} alt={title} className="gif" />
          </div>

        </div>
      </div>
    </section>
  );
}

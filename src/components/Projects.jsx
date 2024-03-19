import ProjectCard from "../components/ProjectCard";

import project1 from "../images/project1.gif";
import project2 from "../images/project2.gif";
import project3 from "../images/project3.gif";

import project1thumb from "../images/project1thumb.png";
import project2thumb from "../images/project2thumb.png";
import project3thumb from "../images/project3thumb.png";

export default function Projects() {
  const projects = [
    {
      status: "Personal Project",
      title: "Electric Vehicles",
      tecstack: "NextJS | Sass",
      description: "A simplified yet beautiful shopping experience with an innovative approach to e-commerce in the digital space.",
      thumbSrc: project1thumb.src,
      gifSrc: project1.src
    },

    {
        status: "Personal Project",
        title: "Clash Royale",
        tecstack: "NextJS | Sass | Restfull Api",
        description: "A website educating users on how to play the game as well as showing off all the amazing artwork, arenas and the characters.",
        thumbSrc: project2thumb.src,
        gifSrc: project2.src
      },

      {
        status: "Personal Project",
        title: "Slacker Radio",
        tecstack: "NextJS | Sass | Firebase | Restfull Api",
        description: "A new app experience with a high emphasis on user interactivity and visual content in a functional yet innovative design.",
        thumbSrc: project3thumb.src,
        gifSrc: project3.src
      },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          status={project.status}
          title={project.title}
          tecstack={project.tecstack}
          description={project.description}
          thumbSrc={project.thumbSrc}
          gifSrc={project.gifSrc}
        />
      ))}
    </>
  );
}
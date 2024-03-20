/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
import ProjectCard from './ProjectCard';

import project1 from '../images/project1.gif';
import project2 from '../images/project2.gif';
import project3 from '../images/project3.gif';

import project1thumb from '../images/project1thumb.png';
import project2thumb from '../images/project2thumb.png';
import project3thumb from '../images/project3thumb.png';

export default function Projects() {
  const projects = [
    {
      status: 'Frontend',
      title: 'Electric Vehicles',
      tecstack: 'NextJS | Sass',
      description: 'Web application developed aimed at providing a convenient and eco-friendly solution for renting electric vehicles in Bermuda. The platform offers a fast way to know more about eletric cars.',
      thumbSrc: project1thumb,
      gifSrc: project1,
    },

    {
      status: 'Fullstack',
      title: 'Clash Royale',
      tecstack: 'NextJS | Sass | Restfull Api',
      description: 'A website educating users on how to play the game as well as showing off all the amazing artwork, arenas and the characters.',
      thumbSrc: project2thumb,
      gifSrc: project2,
    },

    {
      status: 'Mobile',
      title: 'Slacker Radio',
      tecstack: 'NextJS | Sass | Firebase | Restfull Api',
      description: 'A new app experience with a high emphasis on user interactivity and visual content in a functional yet innovative design.',
      thumbSrc: project3thumb,
      gifSrc: project3,
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

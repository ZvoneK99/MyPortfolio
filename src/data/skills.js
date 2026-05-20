import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiDotnet, SiMysql, SiGit, SiGithub, SiBootstrap
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

export const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'C#', Icon: TbBrandCSharp, color: '#239120' },
      { name: '.NET', Icon: SiDotnet, color: '#512BD4' },
    ],
  },
  {
    category: 'Database & Tools',
    skills: [
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#f1f5f9' },
    ],
  },
];

import Github from './Icons/Github';
import Linkedin from './Icons/Linkedin';

import './Icon.css';
const Icon = ({ name, link, className }) => {
  const components = {
    github: Github,
    linkedin: Linkedin,
  };

  const IconName = components[name];

  return (
    <a href={link} className={className}>
      <IconName />
    </a>
  );
};
export default Icon;

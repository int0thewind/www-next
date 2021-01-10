import { useState } from 'react';
import { ProjectInfo } from '../lib';
import Pill from './Pill';
import Button from './Button';

type ProjectCardProps = {
  data: ProjectInfo;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function ProjectCard({ data }: ProjectCardProps) {
  const {
    title, isMain, year, month, tags, desc, shortDesc, colab, links,
  } = data;
  const dateString = `${months[month]} ${year}`;
  const [displayDesc, setDisplayDesc] = useState(false);
  const toggleDisplayDesc = () => setDisplayDesc(!displayDesc);
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <div className="project-card-tags">
        <Pill color="secondary">{dateString}</Pill>
        {!isMain || <Pill color="primary">Major Work</Pill>}
        {tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}
      </div>
      <p>
        {displayDesc ? desc : shortDesc}
      </p>
      <Button onClick={toggleDisplayDesc} variant="link" sm>
        {displayDesc ? 'Collapse' : 'Expand'}
      </Button>
      {Object.keys(links).map((key) => <Button key={key} href={links[key]} variant="link">{key}</Button>)}
      {!colab.length || (
      <>
        <h5>Collaborators</h5>
        <ul>
          {colab.map(({ name, contact }) => <li key={name}>{`${name}: ${contact}`}</li>)}
        </ul>
      </>
      )}
    </div>
  );
}

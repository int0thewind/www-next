import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { ProjectInfo } from '../lib';

type ProjectCardProps = {
  data: ProjectInfo;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function ProjectCard({ data }: ProjectCardProps) {
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
        {!isMain || <Badge pill variant="danger">Major Work</Badge>}
        <Badge pill variant="warning">{dateString}</Badge>
        {tags.map((tag) => <Badge key={tag} pill variant="info">{tag}</Badge>)}
      </div>
      <p>
        {displayDesc ? desc : shortDesc}
      </p>
      <Button onClick={toggleDisplayDesc} variant="link" size="sm">
        {displayDesc ? 'Show Less' : 'Show More'}
      </Button>
      {Object.keys(links).map((key) => <Button key={key} href={links[key]}>{key}</Button>)}
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

type ProjectPageProps = {
  data: ProjectInfo[]
};

export default function ProjectPage({ data }: ProjectPageProps) {
  return (
    <div className="project-page">
      {data.map((d) => <ProjectCard data={d} />)}
    </div>
  );
}

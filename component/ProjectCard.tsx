import { useState } from 'react';
import Link from 'next/link';
import Tag from './Tag';
import { ProjectInfo } from '../lib';

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
      <div className="project-card-tags-container">
        <Tag color="primary" label={dateString} />
        {!isMain || <Tag color="secondary" label="Major Work" />}
        {tags.map((tag) => <Tag key={tag} color="default" label={tag} />)}
      </div>
      <p>
        {displayDesc ? desc : shortDesc}
      </p>
      <button type="button" onClick={toggleDisplayDesc} className="project-card-button">
        {displayDesc ? 'Show Less' : 'Show More'}
      </button>
      {Object.keys(links).map((key) => (
        <Link key={key} href={links[key]}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a target="_blank" rel="noreferrer" className="project-card-link">
            {key}
          </a>
        </Link>
      ))}
      {!colab.length || (
      <>
        <h5>Collaborators</h5>
        <ul>
          {colab.map(({ name, contact }) => (
            <li key={name}>
              {`${name}: ${contact}`}
            </li>
          ))}
        </ul>
      </>
      )}
    </div>
  );
}

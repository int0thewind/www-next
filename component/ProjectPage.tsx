import { ProjectInfo } from '../lib';

type ProjectCardProps = {
  data: ProjectInfo;
};

function ProjectCard({ data }: ProjectCardProps) {
  return <p>Project Card Works!</p>;
}

type ProjectPageProps = {
  data: ProjectInfo[]
};

export default function ProjectPage({ data }: ProjectPageProps) {
  return <p>Project Page Works!</p>;
}

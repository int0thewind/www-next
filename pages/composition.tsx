import { InferGetStaticPropsType } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ProjectInfo, ProjectSort } from '../lib';
import { ProjectCard } from '../component';

export async function getStaticProps() {
  const dataPath = join(process.cwd(), 'data/comp.json');
  const dataContent = readFileSync(dataPath, 'utf-8');
  const projectInfo: ProjectInfo[] = JSON.parse(dataContent);
  projectInfo.sort(ProjectSort);
  return {
    props: {
      projectInfo,
    },
    revalidate: 30,
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Composition({ projectInfo }: Props) {
  return (
    <div className="project-page">
      {projectInfo.map((d) => <ProjectCard data={d} />)}
    </div>
  );
}

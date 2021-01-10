import { InferGetStaticPropsType } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ProjectInfo } from '../lib';
import { ProjectCard } from '../component';

export async function getStaticProps() {
  const dataPath = join(process.cwd(), 'data/code.json');
  const dataContent = readFileSync(dataPath, 'utf-8');
  const projectInfo: ProjectInfo[] = JSON.parse(dataContent);
  return {
    props: {
      projectInfo,
    },
    revalidate: 30,
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Code({ projectInfo }: Props) {
  return (
    <div className="project-page">
      {projectInfo.map((d) => <ProjectCard data={d} />)}
    </div>
  );
}

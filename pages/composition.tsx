import { InferGetStaticPropsType } from 'next';
import { ProjectInfo, ProjectSort } from '../component/types';
import { ProjectCard } from '../component';

export async function getStaticProps() {
  const data = await fetch('https://int0thewind-default.s3.us-east-2.amazonaws.com/proj-info/comp.json');
  const projectInfo: ProjectInfo[] = await data.json();
  projectInfo.sort(ProjectSort);
  return {
    props: {
      projectInfo,
    },
    revalidate: 600,
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Composition({ projectInfo }: Props) {
  return (
    <div className="project-page">
      {projectInfo.map((d) => <ProjectCard key={d.id} data={d} />)}
    </div>
  );
}

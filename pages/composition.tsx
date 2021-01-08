import { InferGetStaticPropsType } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ProjectInfo } from '../lib';

export async function getStaticProps() {
  const dataPath = join(process.cwd(), 'data/comp.json');
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

export default function Composition({ projectInfo }: Props) {
  return (
    <p>Composition Page Works!</p>
  );
}

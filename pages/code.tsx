import { InferGetStaticPropsType } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ProjectInfo } from '../lib';

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
    <p>Code Page Works!</p>
  );
}

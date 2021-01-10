import ProjectInfo from './ProjectInfo';

export default function ProjectSort(f: ProjectInfo, s: ProjectInfo) {
  if (Number(f.isMain) - Number(s.isMain) !== 0) return f.isMain ? -1 : 1;
  if (f.year - s.year !== 0) return f.year > s.year ? -1 : 1;
  if (f.month - s.month !== 0) return f.month > s.month ? -1 : 1;
  return f.id > s.id ? -1 : 1;
}

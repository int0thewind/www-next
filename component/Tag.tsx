type TagProp = {
  color: 'primary' | 'secondary' | 'default';
  label: string;
};

export default function Tag({ color, label }: TagProp) {
  const classList = ['project-card-tag'];
  if (color === 'primary') classList.push('project-card-tag-primary');
  if (color === 'secondary') classList.push('project-card-tag-secondary');
  return (
    <span className={classList.join(' ')}>
      {label}
    </span>
  );
}

export default interface ProjectInfo {
  id: string,
  isMain: boolean,
  title: string,
  year: number,
  month: number,
  desc: string,
  shortDesc: string,
  links: {
    [key: string]: string,
  }
  tags: string[],
  imgs: URL[],
  colab: {
    name: string,
    contact: string,
  }[]
}

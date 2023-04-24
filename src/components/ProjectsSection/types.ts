export type Category = {
  id: string;
  name: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  image: string;
  previewLink: string;
  githubLink: string;
};

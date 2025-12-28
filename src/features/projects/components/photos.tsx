const images = import.meta.glob(
  "../public/projects/**/**/*.{png,jpg,jpeg}",
  { eager: true, as: "url" }
);

export const Photos = Object.entries(images).reduce<
  Record<string, string[]>
>((acc, [path, url]) => {
  const projectName = path.split("/projects/")[1].split("/")[0];

  acc[projectName] ??= [];
  acc[projectName].push(url);

  return acc;
}, {});
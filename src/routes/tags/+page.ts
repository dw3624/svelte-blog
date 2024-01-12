export const load = async ({ fetch }) => {
  const response = await fetch("api/tags");
  const tags = await response.json();
  return { tags };
};

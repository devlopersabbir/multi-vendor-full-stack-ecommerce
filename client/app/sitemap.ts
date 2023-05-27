export default async () => {
  const routes = ["", "/category", "/order", "/single-product"].map(
    (route) => ({
      url: `http://localhost:3000${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes];
};

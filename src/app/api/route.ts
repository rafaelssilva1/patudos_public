const GET = async () => {
  return Response.json({
    routes: {
      pets: "/pets",
      "pet-details": "/pets/:id",
      blog: "/blog",
      "blog-details": "/blog/:id",
    },
  });
};

export { GET };

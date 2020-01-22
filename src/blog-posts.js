export const getPosts = () => {
  return [
    {
      title: "Hello World! Starting your personal blog",
      slug: "hello-world-starting-your-personal-blog",
      details: require("./posts/hello-world.md").default,
      date: "22 01 2020"
    }
  ];
};

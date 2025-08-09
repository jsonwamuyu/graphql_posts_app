let posts = [
  {
    id: 1,
    title: "Nothing haters",
    content: "Goto hell, theres nothing you can tell me",
    platform: ["facebook", "twitter"],
  },
  {
    id: 2,
    title: "Best photo",
    content: "This was taken during my wedding day",
    platform: ["instagram", "dribble"],
  },
  {
    id: 3,
    title: "What the hell",
    content: "Go to hell and i said it",
    platform: ["Figma", "Adobe"],
  },
];

let comments = [
  {
    id: 1,
    content: "I love it",
    author_id: 1,
    comment_id: 1,
  },
  {
    id: 2,
    content: "Also go to hell",
    author_id: 2,
    comment_id: 1,
  },
];

let authors = [
  {
    id: 1,
    name: "John doe",
    verified: false,
  },
  {
    id: 2,
    name: "Jane Doe",
    verified: true,
  },
  {
    id: 3,
    name: "Mary Graham",
    varified: false,
  },
];

export default { posts, authors, comments };

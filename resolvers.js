import db from "./_db.js";

export const resolvers = {
  Query: {
    posts() {
      posts = db.posts;
      return posts;
    },
    post(_, { id }) {
      post = db.posts.find((post) => post.id === id);
      return post;
    },
    comments() {
      return db.comments;
    },
    comment(_, { id }) {
      comment = db.comments.find((comment) => comment.id === id);
      return comment;
    },
    authors: () => db.authors,
    author: (_, { id }) => {
      author = db.authors.find((author) => author.id === id);
      return author;
    },
  },
};

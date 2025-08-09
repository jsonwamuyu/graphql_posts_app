import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";

const typeDefs = `#graphql
    type Post{
        id: ID!
        title: String!
        content: String!
        platform:[String!]
    }
    type Comment{
        id:ID!
        content:String!
    }
    type Author{
        id:ID!
        name: String!
        verified: Boolean
    }

    type Query{
        posts:[Post]
        post(id:ID!):Post
        comments: [Comment]
        comment(id:ID!):Comment
        authors:[Author]
        author(id:ID!):Author
    }
`;

const resolvers = {
  Query: {
    posts: () => db.posts,
    post: (_, { id }) => {
      const post = db.posts.find((post) => post.id === Number(id));
      if (!post) {
        throw new Error(`Post with id ${id} not found.`);
      }
      return post;
    },

    comments: () => db.comments,
    comment: (_, { id }) => {
      const comment = db.comments.find((comment) => comment.id === Number(id));
      return comment;
    },
    authors: () => db.authors,
    author: (_, { id }) => {
      const author = db.authors.find((author) => author.id === Number(id));
      if (!author) {
        throw new Error(`Author with id ${id} not found.`);
      }
      return author;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function start_server() {
  const { url } = await startStandaloneServer(server, {
    listen: {
      port: 4000,
    },
  });
  console.log(`Server running at ${url}`);
}
start_server().catch((error) => {
  console.error("Error starting server:", error);
});

// Define typeDefs - how data looks likes and their entry points
export const typeDefs = `#graphql
    // Define structure of the data - how data looks like
    type Post{
        id: ID!
        title: String!
        content: String!
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

    // Define entry points for these typeDefs
    type Query{
        posts:[Post]
        post(id:ID!)
        comments: [Comment]
        comment:Comment
        authors:[Authors]
        author:Author
    }
`;

export const resolvers = {
  Query: {
    posts: () => posts,
    post: (_, { id }) => posts.find((post) => post.id === id),
    comments: () => comments,
    comment: (_, { id }) => comments.find((post) => post.id === id),
    authors: () => authors,
    author: (_, { id }) => authors.find((author) => author.id === id),
  },
};

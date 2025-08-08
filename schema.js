// Types int, String, Float, Boolean ID

export const typeDefs = `#graphql
    type Post{
        id:ID!
        title: String!
        content: String!
        author:String!
    }
    type Game{
        id: ID!
        title: String!
        platform:[String!]!
    }

    type Author{
        id: ID!
        fullname: String!
    }
    type Reviews{
        id: ID!
    }
    type Query{
        posts:[Post]
        games:[Game]
        authors: [Author]
        post(id:ID):Post
    }
`;

export const resolvers = {
  Query: {
    posts: () => post,
  },
};

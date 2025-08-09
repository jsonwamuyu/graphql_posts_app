export const typeDefs = `#graphql
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
        post(id:ID!)
        comments: [Comment]
        comment:Comment
        authors:[Authors]
        author:Author
    }
`;
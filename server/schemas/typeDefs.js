const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User{
   _id: ID
   username: String
   email: String
   password: String
   books: [Book]
}

type Book{
authors: [String]
description: String
bookId: String
image: String
link: String
title: String
}

type Auth {
    token: ID!
    user: User
  }

type Query{
  me: User
}

type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook(description: String!, bookId: String!, title: String!, link: String, image: String, authors: [String]): Book
    
    }
`
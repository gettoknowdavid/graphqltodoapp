const { gql } = require("apollo-server");

module.exports = gql`
  type Todo {
    id: ID!
    item: String!
    description: String
    isComplete: Boolean
  }

  type Query {
    todos: [Todo]
  }

  input CreateTodoInput {
    item: String!
    description: String
    isComplete: Boolean
  }

  input UpdateTodoInput {
    item: String
    description: String
    isComplete: Boolean
  }

  input DeletePodcastInput {
    id: ID!
  }
  type DeletePayload {
    id: ID!
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo!
    updateTodo(id: ID, input: UpdateTodoInput!): Todo!
    deleteTodo(id: ID): DeletePayload!
  }
`;

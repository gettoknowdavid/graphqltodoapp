const { gql } = require("apollo-server");

module.exports = gql`
  type Todo {
    id: ID!
    item: String!
    description: String
    isComplete: Boolean
    addedDate: String
  }

  type Query {
    todos: [Todo]
  }

  input CreateTodoInput {
    item: String!
    description: String
    isComplete: Boolean
    addedDate: String
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
    addTodo(
      item: String!
      description: String
      isComplete: Boolean
      addedDate: String
    ): Todo
    createTodo(input: CreateTodoInput!): Todo!
    updateTodo(id: ID, input: UpdateTodoInput!): Todo!
    deleteTodo(id: ID): DeletePayload!
  }
`;

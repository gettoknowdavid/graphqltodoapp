module.exports = async (_, { input }, { models }) => {
  newTodo = await models.Todo.create(input);
  return newTodo;
};

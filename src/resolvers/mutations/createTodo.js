module.exports = async (_, { input }, { models }) => {
  const newTodo = await models.Todo.create(input);
  return newTodo;
};

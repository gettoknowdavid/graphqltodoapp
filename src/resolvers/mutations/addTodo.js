module.exports = async (_, { item, description, isComplete }, { models }) => {
  const newTodo = await models.Todo.create(
    item,
    description,
    isComplete,
    Date.now()
  );
  return newTodo;
};

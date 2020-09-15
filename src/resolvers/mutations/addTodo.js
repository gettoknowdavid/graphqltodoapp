module.exports = async (_, { item, description, isComplete }, { models }) => {
  const newTodo = await models.Todo({
    item,
    description,
    isComplete,
    addedDate: new Date().toISOString(),
  });
  const todo = await newTodo.save();
  return todo;
};

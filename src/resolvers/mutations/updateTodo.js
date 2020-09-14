module.exports = async (_, { id, input }, { models }) => {
  const todo = await models.Todo.findOne({ _id: id });

  Object.keys(input).forEach((value) => {
    todo[value] = input[value];
  });

  const updatedTodo = await todo.save();
  return updatedTodo;
};

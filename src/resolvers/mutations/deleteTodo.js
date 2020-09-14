module.exports = async (_, { id }, { models }) => {
  const todo = await models.Todo.deleteOne({ _id: id });

  return { id: id };
};

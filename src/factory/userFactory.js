const generateUser = (name, id) => ({
  id: id || 0,
  name: name || '',
});

export default {
  generateUser,
};

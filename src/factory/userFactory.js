const generateUser = ({name, id, photoUrl}) => ({
  id: id || 0,
  name: name || '',
  photoUrl: photoUrl || '',
});

export default {
  generateUser,
};

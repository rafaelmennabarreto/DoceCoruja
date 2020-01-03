const generateUser = ({name, id, photoUrl}) => ({
  id: id || 0,
  name: name || '',
  photoUrl: photoUrl || '',
});

const generateUserByGoogleLoginResponse = user => ({
  id: user.id || 0,
  name: user.name || '',
  photoUrl: user.photo || '',
});

export default {
  generateUser,
  generateUserByGoogleLoginResponse,
};

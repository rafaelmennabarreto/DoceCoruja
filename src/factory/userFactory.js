import User from '../model/user';

const generateUser = ({name, id, photoUrl}) => new User({name, id, photoUrl});

const generateUserByGoogleLoginResponse = user =>
  new User({
    id: user.id || 0,
    name: user.name || '',
    photoUrl: user.photo || '',
  });

export default {
  generateUser,
  generateUserByGoogleLoginResponse,
};

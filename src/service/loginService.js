import {GoogleSignin} from '@react-native-community/google-signin';

export const GoogleLogin = async () => {
  try {
    await GoogleSignin.configure();

    const user = GoogleSignin.signIn();
    return user;
  } catch (e) {
    console.error(e);
  }
};

export const IsLogged = async () => {
  return await GoogleSignin.isSignedIn();
};

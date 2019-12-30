import {GoogleSignin} from '@react-native-community/google-signin';

export const GoogleLogin = async () => {
  try {
    await GoogleSignin.configure({
      webClientId:
        '146793610437-q6tf8jgcg78nbmcejfudu6n271ncoh32.apps.googleusercontent.com',
      offlineAccess: true,
    });

    await GoogleSignin.signIn();
  } catch (e) {
    console.error(e);
  }
};

export const IsLogged = async () => {
  return await GoogleSignin.isSignedIn();
};

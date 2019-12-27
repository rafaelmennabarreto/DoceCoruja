import {GoogleSignin} from '@react-native-community/google-signin';

export const GoogleLogin = async () => {
  try {
    // add any configuration settings here:
    await GoogleSignin.configure();

    const data = await GoogleSignin.signIn();

    console.log(data.idToken);
  } catch (e) {
    console.error(e);
  }
};

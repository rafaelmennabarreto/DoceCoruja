import firebase from 'firebase';
import firebaseConfig from '../config/firebaseConfig';

const startDb = () => {
  if (!firebase.app.length) {
    return firebase.initializeApp(firebaseConfig);
  }

  return firebase.app;
};

const Db = startDb();

export default Db;

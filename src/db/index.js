import firebase from 'firebase';
import firebaseConfig from '../config/firebaseConfig';
const startDb = () => {
  return firebase.initializeApp(firebaseConfig);
};

const Db = startDb();

export default Db;

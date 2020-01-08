import firebaseApp from '../db';
const DB_REF = 'Clients/';

const clientService = _firebaseApp => ({
  store: async client => {
    try {
      const savedData = await _firebaseApp
        .database()
        .ref(DB_REF)
        .set(client);

      return savedData;
    } catch (error) {
      console.log(error.toString());
    }
  },
});

export default clientService(firebaseApp);

// firebaseApp.database().ref.set

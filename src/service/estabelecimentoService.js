import firebaseApp from '../db';

class EstabelecimentoService {
  constructor(FirebaseApp) {
    this._firebaseApp = FirebaseApp.database().ref('Estabelecimento');
  }

  async store(estabelecimento) {
    try {
      await this._firebaseApp.push(estabelecimento).key;
    } catch (error) {
      return false;
    }
  }

  async getAll() {
    try {
    } catch (err) {
      console.log(err);
    }
  }
}

export default new EstabelecimentoService(firebaseApp);

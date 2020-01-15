import firebaseApp from '../db';

class EstabelecimentoService {
  constructor(FirebaseApp) {
    this._firebaseApp = FirebaseApp.database().ref('Estabelecimento');
  }

  async getLasteId() {
    var valueToReturn = 0;
    await this._firebaseApp.limitToLast(1).on('value', item => {
      if (item) {
        valueToReturn = item
          .val()
          .map(i => i && i.id + 1)
          .filter(id => id);

        console.log(valueToReturn[0]);
      }
    });

    return valueToReturn;
  }

  async store(estabelecimento) {
    try {
      estabelecimento.id = await this.getLasteId();
      // console.log(estabelecimento.id);
      await this._firebaseApp.child(estabelecimento.id).set(estabelecimento);
      return estabelecimento;
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

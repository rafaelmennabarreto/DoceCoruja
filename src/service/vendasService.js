import firebaseApp from '../db';

class VendasService {
  constructor(FirebaseApp) {
    this._firebaseApp = FirebaseApp.database().ref('Vendas');
  }

  async getLasteId() {
    var valueToReturn = 0;

    await this._firebaseApp.limitToLast(1).once('value', item => {
      if (item.hasChildren()) {
        const key = Object.keys(item.val())[0];
        const value = parseInt(key);
        valueToReturn = value + 1;
      }
    });

    return valueToReturn;
  }

  async store(venda) {
    try {
      venda.id = await this.getLasteId();
      await this._firebaseApp.child(venda.id).set(venda);
      return venda;
    } catch (error) {
      return false;
    }
  }

  async update(venda) {
    try {
      await this._firebaseApp.child(venda.id).set(venda);
      return venda;
    } catch (erro) {
      return false;
    }
  }

  async getAll() {
    try {
      const data = [];

      await this._firebaseApp.once('value', itens => {
        itens.forEach(item => {
          data.push(item.val());
        });
      });
      return data;
    } catch (err) {}
  }

  async delete(venda) {
    try {
      await this._firebaseApp.child(venda.id).remove();
      return venda;
    } catch (erro) {
      return false;
    }
  }
}

export default new VendasService(firebaseApp);

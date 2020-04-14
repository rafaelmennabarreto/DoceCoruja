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
      const lastId = await this.getLasteId();
      const vendasToSave = {...venda, id: lastId};
      await this._firebaseApp.child(vendasToSave.id).set(vendasToSave);
      return vendasToSave;
    } catch (error) {
      console.log(error);
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

  async getAllInMonth(filterMonth) {
    try {
      const date = filterMonth || new Date();
      const firstMonthDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        1,
      ).getTime();

      const lasMonthDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0,
      ).getTime();

      const data = [];

      await this._firebaseApp
        .orderByChild('createdAt')
        .startAt(firstMonthDay)
        .endAt(lasMonthDay)
        .once('value', itens => {
          itens.forEach(item => {
            data.push(item.val());
          });
        });

      return data;
    } catch (err) {
      return err;
    }
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

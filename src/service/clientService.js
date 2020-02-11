import firebaseApp from '../db';

class ClientService {
  constructor(FirebaseApp) {
    this._firebaseApp = FirebaseApp.database().ref('Cliente');
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
  async store(client) {
    try {
      const clientToSave = {...client, id: await this.getLasteId()};
      await this._firebaseApp.child(clientToSave.id).set(clientToSave);
      return clientToSave;
    } catch (error) {
      return false;
    }
  }

  async update(client) {
    try {
      await this._firebaseApp.child(client.id).set(client);
      return client;
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
    } catch (err) {
      return false;
    }
  }

  async delete(client) {
    try {
      await this._firebaseApp.child(client.id).remove();
      return client;
    } catch (erro) {
      return false;
    }
  }
}

export default new ClientService(firebaseApp);

// firebaseApp.database().ref.set

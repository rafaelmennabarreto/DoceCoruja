import firebaseApp from '../db';

class EstabelecimentoService {
    constructor(FirebaseApp) {
        this._firebaseApp = FirebaseApp.database().ref('Estabelecimento');
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

    async store(estabelecimento) {
        try {
            estabelecimento.id = await this.getLasteId();
            await this._firebaseApp
                .child(estabelecimento.id)
                .set(estabelecimento);
            return estabelecimento;
        } catch (error) {
            return false;
        }
    }

    async update(estabelecimento) {
        try {
            await this._firebaseApp
                .child(estabelecimento.id)
                .set(estabelecimento);
            return estabelecimento;
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

    async delete(estabelecimento) {
        try {
            await this._firebaseApp.child(estabelecimento.id).remove();
            return estabelecimento;
        } catch (erro) {
            return false;
        }
    }

    async getById(id) {
        try {
            let data = null;

            await this._firebaseApp
                .orderByChild('id')
                .equalTo(id)
                .once('value', item => {
                    let retorno = item.val();
                    for (i in retorno) {
                        data = retorno[i];
                    }
                });

            return data;
        } catch (err) {
            console.log(err);
        }
    }
}

export default new EstabelecimentoService(firebaseApp);

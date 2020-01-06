import Cliente from './cliente';
import Estabelecimento from './estabelecimento';

export default class Venda {
  constructor({id, idOwner, value, cliente, estabelecimento}) {
    this.id = id || 0;
    this.idOwner = idOwner || 0;
    this.value = value || 0;
    this.estabelecimento = estabelecimento || new Estabelecimento({});
    this.cliente = cliente || new Cliente({});
    this.createdAt = new Date();
  }
}

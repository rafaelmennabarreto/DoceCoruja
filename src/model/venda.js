import Cliente from './cliente';
import Estabelecimento from './estabelecimento';

export default class Venda {
    constructor({id, value, cliente, estabelecimento, saleDate}) {
        this.id = id || 0;
        this.value = value || 0;
        this.estabelecimento = estabelecimento || new Estabelecimento({});
        this.cliente = cliente || new Cliente({});
        this.IsPaid = false;
        this.createdAt = new Date().getTime();
        this.saleDate = saleDate.getTime();
    }
}

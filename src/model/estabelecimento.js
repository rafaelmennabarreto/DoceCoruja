export default class Estabelecimento {
  constructor({id, name, street, number}) {
    this.id = id || 0;
    this.name = name || '';
    this.street = street || '';
    this.number = number || 0;
    this.createdAt = new Date();
  }
}

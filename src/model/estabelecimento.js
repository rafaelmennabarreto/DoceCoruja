export default class Estabelecimento {
  constructor({name, street, number, phone}) {
    this.name = name || '';
    this.street = street || '';
    this.number = number || 0;
    this.phone = phone || '';
    this.createdAt = new Date();
  }
}

export default class Estabelecimento {
  constructor({id, name, street, number, phone, createdAt}) {
    this.id = id || 0;
    this.name = name || '';
    this.street = street || '';
    this.number = number || 0;
    this.phone = phone || '';
    this.createdAt = createdAt || new Date();
  }
}

export default class Cliente {
  constructor({id, idOwner, name}) {
    this.id = id || 0;
    this.idOwner = idOwner || 0;
    this.name = name || '';
    this.createdAt = new Date();
  }
}

export default class Cliente {
  constructor({id, idOwner, name, idEstabelecimento}) {
    this.id = id || 0;
    this.idOwner = idOwner || 0;
    this.idEstabelecimento = idEstabelecimento || '';
    this.name = name || '';
    this.createdAt = new Date();
  }
}

export default class Cliente {
  constructor({id, name, idEstabelecimento}) {
    this.id = id || 0;
    this.idEstabelecimento = idEstabelecimento || '';
    this.name = name || '';
    this.createdAt = new Date();
  }
}

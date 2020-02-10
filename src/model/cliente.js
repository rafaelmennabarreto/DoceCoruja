export default class Cliente {
  constructor({id, name, idEstabelecimento, telefone, email, date}) {
    this.id = id;
    this.idEstabelecimento = idEstabelecimento;
    this.name = name;
    this.telefone = telefone;
    this.email = email;
    this.createdAt = date;
  }
}

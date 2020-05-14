export default class Cliente {
    constructor({
        id,
        name,
        idEstabelecimento,
        telefone,
        email,
        street,
        number,
        date,
    }) {
        this.id = id;
        this.idEstabelecimento = idEstabelecimento;
        this.name = name;
        this.telefone = telefone;
        this.email = email;
        this.createdAt = date?.getTime();
        this.street = street || '';
        this.number = number || '';
    }
}

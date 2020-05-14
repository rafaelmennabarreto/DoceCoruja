import Client from '~/model/cliente';

const generateClient = ({
    id,
    name,
    idEstabelecimento,
    telefone,
    email,
    street,
    number,
}) =>
    new Client({
        id: id || 0,
        name: name || '',
        idEstabelecimento: idEstabelecimento || 0,
        telefone: telefone || '',
        email: email || '',
        date: new Date(),
        street,
        number,
    });

export default {
    generateClient,
};

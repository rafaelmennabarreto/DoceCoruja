import Client from '~/model/cliente';

const generateClient = ({id, name, idEstabelecimento, telefone, email}) =>
  new Client({
    id: id || 0,
    name: name || '',
    idEstabelecimento: idEstabelecimento || '',
    telefone: telefone || '',
    email: email || '',
    date: new Date(),
  });

export default {
  generateClient,
};

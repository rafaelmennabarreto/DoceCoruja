import Estabelecimento from '../model/estabelecimento';

const generateEstabelecimentos = (idOwner, name, number, street) =>
  new Estabelecimento({
    idOwner,
    name,
    number,
    street,
  });

export default {
  generateEstabelecimentos,
};

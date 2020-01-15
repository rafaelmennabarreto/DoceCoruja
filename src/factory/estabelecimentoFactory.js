import Estabelecimento from '../model/estabelecimento';

const generateEstabelecimentos = ({name, phone, number, street}) =>
  new Estabelecimento({
    name,
    number,
    street,
    phone,
  });

export default {
  generateEstabelecimentos,
};

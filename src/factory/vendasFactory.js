import Venda from '~/model/venda';

const generateVendas = ({id, value, cliente, estabelecimento, saleDate}) => {
  return new Venda({
    id,
    value,
    cliente,
    estabelecimento,
    saleDate,
  });
};

export default {
  generateVendas,
};

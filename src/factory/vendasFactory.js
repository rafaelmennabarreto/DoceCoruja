import Venda from '~/model/venda';

const generateVendas = ({
  id,
  value,
  cliente,
  estabelecimento,
  description,
  saleDate,
  isPaid,
}) => {
  return new Venda({
    id,
    value,
    cliente,
    estabelecimento,
    description,
    saleDate,
    isPaid,
  });
};

export default {
  generateVendas,
};

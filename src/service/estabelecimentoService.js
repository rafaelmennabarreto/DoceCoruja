import firebaseApp from '../db';
const DB_REF = 'Estabelecimento/';

export const EstabelecimentoService = _firebaseApp => ({
  store: async estabelecimento => {
    try {
      const data = await _firebaseApp
        .database()
        .ref(DB_REF)
        .set(estabelecimento);

      return data;
    } catch (error) {}
  },
});

export default EstabelecimentoService(firebaseApp);

const monthNames = [
  {pos: 0, value: 'Janeiro'},
  {pos: 1, value: 'Fevereiro'},
  {pos: 2, value: 'Março'},
  {pos: 3, value: 'Abril'},
  {pos: 4, value: 'Maio'},
  {pos: 5, value: 'Junho'},
  {pos: 6, value: 'Julho'},
  {pos: 7, value: 'Agosto'},
  {pos: 8, value: 'Setembro'},
  {pos: 9, value: 'Outubro'},
  {pos: 10, value: 'Novembro'},
  {pos: 11, value: 'Dezembro'},
];

const getMonthYearString = date => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${monthNames.filter(m => m.pos === month)[0].value} ${year}`;
};

const getDateString = date => {
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default {
  getMonthYearString,
  getDateString,
};

import Moment from 'moment';

const getMonthYearString = date => {
  console.log(Moment(date));
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const getDateString = date => {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default {
  getMonthYearString,
  getDateString,
};

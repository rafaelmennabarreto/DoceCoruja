function DateUtils() {
  function getBrFormatedDateString(date) {
    if (date) {
      const day = date.getDay() > 10 ? date.getDay() : `0${date.getDay()}`;
      const month =
        date.getMonth() > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    }
  }

  return {getBrFormatedDateString};
}

export default DateUtils();

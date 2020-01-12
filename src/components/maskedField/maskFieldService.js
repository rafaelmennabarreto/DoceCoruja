const maskField = mask => {
  return value => {
    if (!mask) {
      return value;
    }

    let valueToReturn = mask.replace(/9/g, '*');
    const numbers = [...(value + '')];

    numbers.forEach(n => {
      if (parseInt(n) || n == 0) {
        valueToReturn = valueToReturn.replace('*', n);
      }
    });

    valueToReturn = valueToReturn.replace(/\*/g, '');

    return valueToReturn;
  };
};

export default maskField;

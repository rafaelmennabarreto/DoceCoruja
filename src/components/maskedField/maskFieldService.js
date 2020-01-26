const maskField = mask => {
  return value => {
    if (!mask) {
      return value;
    }

    let maskToUse = mask;

    if (typeof mask === 'object') {
      mask.sort().every(m => {
        if (value.length <= m.length) {
          maskToUse = m;
          return false;
        }
        return true;
      });
    }

    let valueToReturn = maskToUse.replace(/9/g, '*');
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

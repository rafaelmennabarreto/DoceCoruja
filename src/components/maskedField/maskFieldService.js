const maskField = masks => {
  return value => {
    if (!masks) {
      return value;
    }

    value = value.replace(/,/g, '');

    let maskToUse = masks;

    if (typeof masks === 'object') {
      masks.sort().every((mask, i) => {
        const m = mask.replace(/,/g, '');

        if (value.length <= m.length) {
          maskToUse = mask;
          return false;
        }

        if (i + 1 === masks.length) {
          maskToUse = mask;
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

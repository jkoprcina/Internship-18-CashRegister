export const isNegative = number => {
  if (number < 0) {
    return true;
  }
  return false;
};

export const isAnyItemInArrayEmpty = array => {
  array.map(item => {
    if (item === "") {
      return true;
    }
  });
  return false;
};

export const isBarcodeBad = barcode => {
  if (barcode.length !== 13) {
    return true;
  }
  return false;
};

export const amountRemoveValidation = (amount, product) => {
  if (amount === null) {
    return 0;
  }
  if (Number.isInteger(amount) || amount <= 0) {
    alert("The input must be a whole number");
    return 0;
  }
  if (amount > product.amountAvailable) {
    alert("There's not enough in stock");
    return 0;
  }
  return amount;
};

export const amountAddValidation = amount => {
  if (amount === null) {
    return 0;
  }
  if (Number.isInteger(amount) || amount <= 0) {
    alert("The input must be a whole number");
    return 0;
  }
  return amount;
};

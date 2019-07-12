import * as TAX from "./constants";

export const fullPriceNoTaxCalculator = products => {
  var price = 0;
  console.log(products);
  products.map(product => {
    price += product.price * product.amount;
  });
  console.log(price);
  return price.toFixed(2);
};

export const fullPriceWithTaxCalculator = products => {
  var price = 0;
  products.map(product => {
    price +=
      product.price * product.amount +
      product.price * product.amount * (product.tax / 100);
  });
  return price.toFixed(2);
};

export const fullLowerTaxPriceCalculator = products => {
  var price = 0;
  products.map(product => {
    if (product.tax === TAX.LOW_TAX) {
      price += product.price * product.amount * (TAX.LOW_TAX / 100);
    }
  });
  return price.toFixed(2);
};

export const fullHigherTaxPriceCalculator = products => {
  var price = 0;
  products.map(product => {
    if (product.tax === TAX.HIGH_TAX) {
      price += product.price * product.amount * (TAX.HIGH_TAX / 100);
    }
  });
  return price.toFixed(2);
};

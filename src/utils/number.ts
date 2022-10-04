interface PriceFormatterConfig {
  inOnlyNumbers?: boolean;
  sign?: PriceFormatterSign;
}

type PriceFormatterSign = '€';

export const priceFormatter = (
  number: number,
  config?: PriceFormatterConfig,
) => {
  if (isNaN(number)) return '';

  const inOnlyNumbers = config?.inOnlyNumbers ?? false;
  const sign = config?.sign ?? '€';

  const priceString = String(Number(number).toFixed(0));
  const integerPrice = priceString.split('.')[0];

  const formateIntegerPrice = integerPrice.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ' ',
  );

  if (inOnlyNumbers) {
    return formateIntegerPrice;
  }

  return `${formateIntegerPrice} ${sign}`;
};

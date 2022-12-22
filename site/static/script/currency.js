/** @type {(number) => string} */
const formatJapaneseYen = (amount) =>
    amount.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY'});
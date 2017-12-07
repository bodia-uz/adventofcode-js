export const part1 = input => getCaptchaSum(input, 1);
export const part2 = input => getCaptchaSum(input, input.length / 2);

function getCaptchaSum(input, aroundDistance) {
  const digits = input.split('');

  return digits.reduce((sum, digit, index) => {
    if (getDigitAround(digits, index, aroundDistance) === digit) {
      sum += parseInt(digit, 10);
    }

    return sum;
  }, 0);
}

function getDigitAround(digits, index, aroundDistance) {
  const aroundIndex = index + aroundDistance;

  return (
    aroundIndex < digits.length
      ? digits[aroundIndex]
      : digits[aroundIndex - digits.length]
  );
}

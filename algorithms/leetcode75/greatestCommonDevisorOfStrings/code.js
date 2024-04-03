// my sollution
const greatestCommonDivisorOfStrings = (str1, str2) => {
  let res = "";
  let str = "";
  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if (str1[i] === str2[i]) {
      str += str1[i];
      if (
        str1.replaceAll(str, "").length === 0 &&
        str2.replaceAll(str, "").length === 0
      ) {
        res = str;
      }
    } else {
      break;
    }
  }

  return res;
};

// from sollutions
const greatestCommonDivisorOfStringsV2 = (str1, str2) => {
  // handle the base case
  if (str1 + str2 !== str2 + str1) return "";
  let a = str1.length;
  let b = str2.length;

  // loop (divide) until you find the
  // highest common factor (length of string)
  // like we did in maths
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return str1.substring(0, a);
};

module.exports = { greatestCommonDivisorOfStrings };

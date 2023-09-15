function telephoneCheck(str) {
  if (str.indexOf("(") === -1 && str.indexOf(")") > -1) {
    return false;
  }

  if (str[0] === "-") {
    return false;
  }

  if (str.match(/-/g) && str.match(/-/g).length > 2) {
    return false;
  }

  if (str.indexOf(")") - str.indexOf("(") >= 5) {
  //console.log(str.indexOf(")") - str.indexOf("("));
    return false;
  }

  let thaiPhone = str.replace(/-| /g, "");
  //console.log(thaiPhone);
  //console.log(thaiPhone[0] == 1);
  //console.log(thaiPhone.indexOf(")"));

  if (thaiPhone.indexOf("(") < thaiPhone.indexOf(")")) {
    thaiPhone = thaiPhone.replace(/\(|\)/g, "");
  }
  //console.log(thaiPhone);

  if (thaiPhone.length === 10) {
    return true;
  } else if (thaiPhone.length === 11 && thaiPhone[0] === "1") {
    return true;
  }

  return false;
}

let result = telephoneCheck("55 55-55-555-5");
console.log(result);
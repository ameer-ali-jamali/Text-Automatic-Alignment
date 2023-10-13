"use strict";

function trimInput(id) {
  var inputValue = document.getElementById(id).value;
  var assignValue = document.getElementById("assignValue").innerHTML;
  var trimmedValue = inputValue.replace(/^\s{2,}/, ' ');
  var trimmedFBack = inputValue.trim();

  if (/^\s{2,}/.test(inputValue)) {
    var trimmedValue = inputValue.replace(/^\s+/, ' ').replace(/\s+$/, ' ');
    document.getElementById("assignValue").innerText = trimmedValue;
  } else if (/\s{2,}$/.test(inputValue)) {
    var trimmedValue = inputValue.replace(/^\s+/, ' ').replace(/\s+$/, ' ');
    document.getElementById("assignValue").innerText = trimmedValue;
  } else if (trimmedFBack.length > 17) {
    var result = '';

    for (var i = 0; i < trimmedFBack.length; i += 17) {
      result += trimmedFBack.substr(i, 17) + '<br>';
    }

    document.getElementById("assignValue").innerHTML = result;
  }
}
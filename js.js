"use strict";
const value = document.querySelectorAll(".button-app");
const result = document.querySelector(".header_computer--input");
const h1 = document.querySelector(".cardh1");
setInterval(function () {
  h1.classList.toggle("red");
  setInterval(function () {
    h1.classList.toggle("yellow");
  }, 1000);
}, 400);
setInterval(function () {
  console.log(1111);
  result.classList.toggle("yellow");
}, 200);
result.addEventListener("click", function () {});
value.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.textContent.trim() == "=") {
      if (result.value == "") {
        alert("vui lòng nhập dữ liệu!");
      } else {
        const arr = result.value.split("");
        for (let i = 0; i < arr.length - 1; i++) {
          if (
            arr[i] !== "1" &&
            arr[i] !== "2" &&
            arr[i] !== "3" &&
            arr[i] !== "4" &&
            arr[i] !== "5" &&
            arr[i] !== "6" &&
            arr[i] !== "7" &&
            arr[i] !== "8" &&
            arr[i] !== "9" &&
            arr[i] !== "/" &&
            arr[i] !== "*" &&
            arr[i] !== "." &&
            arr[i] !== "+" &&
            arr[i] !== "-" &&
            arr[i] !== "="
          ) {
            if (
              arr[i + 1] !== "1" &&
              arr[i + 1] !== "2" &&
              arr[i + 1] !== "3" &&
              arr[i + 1] !== "4" &&
              arr[i + 1] !== "5" &&
              arr[i + 1] !== "6" &&
              arr[i + 1] !== "7" &&
              arr[i + 1] !== "8" &&
              arr[i + 1] !== "9" &&
              arr[i + 1] !== "/" &&
              arr[i + 1] !== "*" &&
              arr[i + 1] !== "." &&
              arr[i + 1] !== "+" &&
              arr[i + 1] !== "-" &&
              arr[i + 1] !== "="
            ) {
              return (result.value = "dữ liệu nhập không đc chứa chữ cái");
            }
          } else if (
            arr[i] === "*" ||
            arr[i] === "/" ||
            arr[i] === "+" ||
            arr[i] === "-" ||
            arr[i] === "."
          ) {
            if (
              arr[i + 1] === "*" ||
              arr[i + 1] === "/" ||
              arr[i + 1] === "+" ||
              arr[i + 1] === "-" ||
              arr[i + 1] === "."
            ) {
              alert("kiểm tra lại các dấu");
              return (result.value = result.value);
            }
          }
        }
        result.value = eval(result.value);
      }
    } else if (item.textContent.trim() == "C") {
      result.value = "";
    } else {
      if (item.textContent.trim() == "x") {
        result.value += "*";
      } else result.value += item.textContent.trim();
    }
  });
});

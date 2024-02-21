let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.onclick = function () {
  btn2.style.display = 'inline';
  btn1.style.display = 'none';
};

btn2.onclick = function () {
  btn1.style.display = 'inline';
  btn2.style.display = 'none';
};

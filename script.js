const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');

 });
 document.getElementById('bb').onclick = function() {
  document.getElementById('popupBox').style.display = 'flex';
};
document.getElementById('bp').onclick = function() {
  document.getElementById('popupBo').style.display = 'flex';
};

document.getElementById('bk').onclick = function() {
  document.getElementById('popup').style.display = 'flex';
};
document.getElementById('closePopup').onclick = function() {
  document.getElementById('popupBox').style.display = 'none';
};
document.getElementById('closePopu').onclick = function() {
  document.getElementById('popupBo').style.display = 'none';
};

document.getElementById('closePo').onclick = function() {
  document.getElementById('popup').style.display = 'none';
};

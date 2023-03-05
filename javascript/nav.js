const checkbox = document.getElementById('toggle-primary-nav');
const sidebar = document.querySelector('.primary-nav');

function setdisplaystyle () {
  if (checkbox.checked || window.matchMedia("(min-width: 570px)").matches) {
    sidebar.style.display = 'flex';
} else {
    sidebar.style.display = 'none';
}

};

checkbox.addEventListener('change', setdisplaystyle);



function checkCheckbox() {
  if (window.matchMedia("(max-width: 570px)").matches) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
  
  setdisplaystyle();
}

checkCheckbox();

window.addEventListener('resize', checkCheckbox);

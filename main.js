var button = false;

function Menu() {
  if (button == true){
    button = false;
    document.getElementById("menu").style.display = 'none';
  }
  else {
    button = true;
    document.getElementById("menu").style.display = 'flex';
}}

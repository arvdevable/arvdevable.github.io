const menu = document.getElementById("myMenu");

menu.addEventListener("change", function() {
  const selectedOption = this.options[this.selectedIndex];
  window.location = selectedOption.value + ".html";
});



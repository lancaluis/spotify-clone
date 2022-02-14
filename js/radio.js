function playSound(player, currentIcon, newIcon) {
  var Icon = document.getElementById(player);

  if (Icon.classList.contains(currentIcon)) {
    Icon.classList.remove(currentIcon);
    Icon.classList.add(newIcon);
  } else {
    Icon.classList.remove(newIcon);
    Icon.classList.add(currentIcon);
  }
}

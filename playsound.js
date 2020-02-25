var ambient = document.getElementById("ambient");

function muted() {
  if (ambient.muted)
    ambient.muted = false;
  else {
    ambient.muted = true;
      }
}

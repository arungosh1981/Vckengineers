function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("show");
}

/* Close mobile menu after selecting a section */

document.querySelectorAll("#navbar a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("navbar").classList.remove("show");
  });
});

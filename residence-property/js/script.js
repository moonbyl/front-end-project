// Toggle tombol menu
const toggleBtn = document.getElementById("toggle_btn");
const closeBtn = document.getElementById("close_btn");
const navMenu = document.getElementById("nav_menu");

toggleBtn.addEventListener("click", () => {
  navMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navMenu.style.display = "none";
});

// Efek muncul saat halaman load (CSS fade-in)
window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 300 * index);
  });
});

// Inisialisasi AOS (jika kamu pakai)
AOS.init({
  duration: 1000,
  once: true,
});

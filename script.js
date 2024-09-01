// video player

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".background-video");
  let currentVideoIndex = 0;

  function showNextVideo() {
    videos[currentVideoIndex].classList.remove("active");
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videos[currentVideoIndex].classList.add("active");
  }

  videos[currentVideoIndex].classList.add("active");

  setInterval(showNextVideo, 10000);
});

//modal

function closeAllModals() {
  document.querySelectorAll(".modal.visible").forEach((modal) => {
    modal.classList.remove("visible");
  });
}

document.querySelectorAll("[data-modal]").forEach((item) => {
  item.addEventListener("click", function () {
    closeAllModals();
    const modalId = this.getAttribute("data-modal");
    document.getElementById(modalId).classList.add("visible");
  });
});

document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", function () {
    this.closest(".modal").classList.remove("visible");
  });
});

window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("visible");
  }
});

function toggleModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  // Video player logic
  const videos = document.querySelectorAll(".background-video");
  let currentVideoIndex = 0;

  function showNextVideo() {
    videos[currentVideoIndex].classList.remove("active");
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videos[currentVideoIndex].classList.add("active");
  }

  videos[currentVideoIndex].classList.add("active");
  setInterval(showNextVideo, 10000);

  // Modal logic
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const navbarList = document.querySelector(".navbar-left ul");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  // Toggle the menu visibility
  hamburgerIcon.addEventListener("click", () => {
    navbarList.classList.toggle("active");
  });

  // Show the corresponding modal when a list item is clicked
  navbarList.addEventListener("click", (event) => {
    const modalId = event.target.getAttribute("data-modal");
    if (modalId) {
      const selectedModal = document.getElementById(modalId);
      selectedModal.classList.add("visible");
      navbarList.classList.remove("active"); // Hide the menu after selection
    }
  });

  // Close the modal when the close button is clicked
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".modal").classList.remove("visible");
    });
  });

  // Close all modals
  function closeAllModals() {
    document.querySelectorAll(".modal.visible").forEach((modal) => {
      modal.classList.remove("visible");
    });
  }

  // Add event listeners to modal triggers
  document.querySelectorAll("[data-modal]").forEach((item) => {
    item.addEventListener("click", function () {
      closeAllModals();
      const modalId = this.getAttribute("data-modal");
      document.getElementById(modalId).classList.add("visible");
    });
  });

  // Add event listeners to close buttons
  document.querySelectorAll(".close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      this.closest(".modal").classList.remove("visible");
    });
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.classList.remove("visible");
    }
  });
});

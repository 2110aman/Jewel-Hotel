/* ===========================================
   THE JEWEL HOTEL - JAVASCRIPT FUNCTIONALITY
   =========================================== */

document.addEventListener("DOMContentLoaded", function () {
  // ===========================================
  // COUNTER FUNCTIONALITY
  // ===========================================

  // Handle plus/minus buttons for adults and children counters
  const counterButtons = document.querySelectorAll(".counter-btn");

  counterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const isPlus = this.classList.contains("plus");
      const input = this.parentElement.querySelector('input[type="number"]');
      const currentValue = parseInt(input.value);
      const minValue = parseInt(input.getAttribute("min"));

      if (isPlus) {
        input.value = currentValue + 1;
      } else {
        if (currentValue > minValue) {
          input.value = currentValue - 1;
        }
      }

      // Trigger change event
      input.dispatchEvent(new Event("change"));
    });
  });

  // ===========================================
  // SMOOTH SCROLLING FOR NAVIGATION LINKS
  // ===========================================

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ===========================================
  // NAVBAR SCROLL EFFECT
  // ===========================================

  const navbar = document.querySelector(".navbar-container");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      navbar.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  // ===========================================
  // BOOKING FORM VALIDATION
  // ===========================================

  const bookingForm = document.querySelector(".booking-form");
  const checkAvailabilityBtn = document.querySelector(
    ".btn-check-availability"
  );

  checkAvailabilityBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Get form values
    const arrivalDate = document.querySelector(
      'input[value="12/06/2020"]'
    ).value;
    const departureDate = document.querySelector(
      'input[value="12/07/2020"]'
    ).value;
    const adults = document.querySelectorAll(".counter-input input")[0].value;
    const children = document.querySelectorAll(".counter-input input")[1].value;
    const promoCode = document.querySelector(
      'input[placeholder="Enter code"]'
    ).value;

    // Basic validation
    if (!arrivalDate || !departureDate) {
      alert("Please select arrival and departure dates.");
      return;
    }

    if (parseInt(adults) < 1) {
      alert("At least 1 adult is required.");
      return;
    }

    // Simulate API call
    this.textContent = "CHECKING...";
    this.disabled = true;

    setTimeout(() => {
      this.textContent = "CHECK AVAILABILITY";
      this.disabled = false;

      // Show success message (in real app, this would show available rooms)
      alert(
        "Availability check complete! Please contact us at +1.212.863.0550 to complete your booking."
      );
    }, 2000);
  });

  // ===========================================
  // MOBILE MENU TOGGLE
  // ===========================================

  const hamburgerMenu = document.getElementById("hamburger-menu");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");

  if (hamburgerMenu && mobileMenuOverlay) {
    const mobileNavHeader = document.querySelector(".mobile-nav-header");

    // Open mobile menu
    hamburgerMenu.addEventListener("click", function () {
      mobileMenuOverlay.classList.add("active");
      hamburgerMenu.classList.add("active");
      if (mobileNavHeader) {
        mobileNavHeader.classList.add("hide-book-now");
      }
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    });

    // Close mobile menu
    if (closeMenu) {
      closeMenu.addEventListener("click", function () {
        mobileMenuOverlay.classList.remove("active");
        hamburgerMenu.classList.remove("active");
        if (mobileNavHeader) {
          mobileNavHeader.classList.remove("hide-book-now");
        }
        document.body.style.overflow = "auto"; // Restore scrolling
      });
    }

    // Close menu when clicking on overlay
    mobileMenuOverlay.addEventListener("click", function (e) {
      if (e.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove("active");
        hamburgerMenu.classList.remove("active");
        if (mobileNavHeader) {
          mobileNavHeader.classList.remove("hide-book-now");
        }
        document.body.style.overflow = "auto";
      }
    });

    // Close menu when clicking on mobile nav links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenuOverlay.classList.remove("active");
        hamburgerMenu.classList.remove("active");
        if (mobileNavHeader) {
          mobileNavHeader.classList.remove("hide-book-now");
        }
        document.body.style.overflow = "auto";
      });
    });
  }

  // ===========================================
  // SCROLL INDICATOR ANIMATION
  // ===========================================

  const scrollIndicator = document.querySelector(".scroll-indicator");

  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      const bookingWidget = document.querySelector(".booking-widget");
      if (bookingWidget) {
        bookingWidget.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    });
  }

  // ===========================================
  // FORM INPUT ENHANCEMENTS
  // ===========================================

  // Add focus effects to form inputs
  const formInputs = document.querySelectorAll(".booking-form input");

  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
    });
  });

  // ===========================================
  // SOCIAL MEDIA LINKS
  // ===========================================

  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const platform = this.querySelector("i").classList.contains("bi-facebook")
        ? "Facebook"
        : "Instagram";
      alert(
        `Redirecting to ${platform}... (This would open the actual social media page)`
      );
    });
  });

  // ===========================================
  // BOOK NOW BUTTON FUNCTIONALITY
  // ===========================================

  const bookNowBtn = document.querySelector(".btn-book-now");

  bookNowBtn.addEventListener("click", function () {
    // Scroll to booking widget
    const bookingWidget = document.querySelector(".booking-widget");
    if (bookingWidget) {
      bookingWidget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });

  // ===========================================
  // RESPONSIVE NAVIGATION
  // ===========================================

  function handleResize() {
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const mobileNavHeader = document.querySelector(".mobile-nav-header");

    if (window.innerWidth > 767) {
      // Close mobile menu if open when switching to desktop
      if (mobileMenuOverlay && mobileMenuOverlay.classList.contains("active")) {
        mobileMenuOverlay.classList.remove("active");
        if (hamburgerMenu) {
          hamburgerMenu.classList.remove("active");
        }
        if (mobileNavHeader) {
          mobileNavHeader.classList.remove("hide-book-now");
        }
        document.body.style.overflow = "auto";
      }
    }
  }

  // Listen for resize events
  window.addEventListener("resize", handleResize);

  // ===========================================
  // LOADING ANIMATIONS
  // ===========================================

  // Add fade-in animation to elements as they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".booking-widget, .hero-content"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // ===========================================
  // KEYBOARD NAVIGATION
  // ===========================================

  document.addEventListener("keydown", function (e) {
    // ESC key closes mobile menu
    if (e.key === "Escape") {
      const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
      const hamburgerMenu = document.getElementById("hamburger-menu");
      const mobileNavHeader = document.querySelector(".mobile-nav-header");

      if (mobileMenuOverlay && mobileMenuOverlay.classList.contains("active")) {
        mobileMenuOverlay.classList.remove("active");
        if (hamburgerMenu) {
          hamburgerMenu.classList.remove("active");
        }
        if (mobileNavHeader) {
          mobileNavHeader.classList.remove("hide-book-now");
        }
        document.body.style.overflow = "auto";
      }
    }

    // Enter key on counter buttons
    if (e.key === "Enter" && e.target.classList.contains("counter-btn")) {
      e.target.click();
    }
  });

  // ===========================================
  // PERFORMANCE OPTIMIZATION
  // ===========================================

  // Throttle scroll events for better performance
  let ticking = false;

  function updateOnScroll() {
    // Scroll-based animations and effects
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick);

  // Room Thumbnail Card Functionality
  const thumbnailCards = document.querySelectorAll(".thumbnail-card");
  const roomMainImage = document.querySelector(".room-main-image");
  const roomName = document.querySelector(".room-name");
  const priceAmount = document.querySelector(".price-amount");
  const guestCount = document.querySelector(".feature-text");
  const bedType = document.querySelectorAll(".feature-text")[1];

  // Room data for different cards
  const roomData = [
    {
      name: "Deluxe Two Room Suite",
      price: "$99.00",
      guests: "1-4 Guests",
      bed: "1 Queen Bed + 1 Full Sized Bed",
      image: "images/img1.jpg",
    },
    {
      name: "Superior Room",
      price: "$149.00",
      guests: "1-6 Guests",
      bed: "1 Queen Bed + 2 Full Sized Bed",
      image: "images/img2.jpg",
    },
  ];

  // Function to update room information
  function updateRoomInfo(index) {
    const room = roomData[index];

    // Update room image
    roomMainImage.src = room.image;

    // Update room name
    roomName.textContent = room.name;

    // Update price
    priceAmount.textContent = room.price;

    // Update guest count (first feature item)
    const featureTexts = document.querySelectorAll(".feature-text");
    featureTexts[0].textContent = room.guests;

    // Update bed type (second feature item)
    featureTexts[1].textContent = room.bed;

    // Update thumbnail text
    const thumbnailTexts = document.querySelectorAll(".thumbnail-text");
    thumbnailTexts[index].textContent = room.name;
  }

  // Add click event listeners to thumbnail cards
  thumbnailCards.forEach((card, index) => {
    card.addEventListener("click", function () {
      // Remove active class from all cards
      thumbnailCards.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked card
      this.classList.add("active");

      // Update room information
      updateRoomInfo(index);
    });
  });

  // Special Offers Carousel Functionality
  const carouselTrack = document.querySelector(".carousel-track");
  const offerCards = document.querySelectorAll(".offer-card");
  const rectangles = document.querySelectorAll(".rectangle");
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");

  let currentIndex = 0;
  const cardWidth = 413;
  const gap = 20;
  const cardsToShow = 3;

  function updateCarousel() {
    const translateX = -currentIndex * (cardWidth + gap);
    carouselTrack.style.transform = `translateX(${translateX}px)`;

    // Update active states
    offerCards.forEach((card, index) => {
      card.classList.toggle("active", index === currentIndex);
    });

    rectangles.forEach((rectangle, index) => {
      rectangle.classList.toggle("active", index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % offerCards.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + offerCards.length) % offerCards.length;
    updateCarousel();
  }

  // Event listeners
  nextArrow.addEventListener("click", nextSlide);
  prevArrow.addEventListener("click", prevSlide);

  rectangles.forEach((rectangle, index) => {
    rectangle.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Initialize carousel
  updateCarousel();

  // Social Media Instagram Functionality
  const socialImageItems = document.querySelectorAll(".social-image-item");

  // Function to remove active class from all items
  function removeActiveFromAll() {
    socialImageItems.forEach((item) => {
      item.classList.remove("active");
    });
  }

  // Function to add active class to specific item
  function setActiveItem(item) {
    removeActiveFromAll();
    item.classList.add("active");
  }

  socialImageItems.forEach((item) => {
    // Hover event to make item active
    item.addEventListener("mouseenter", function () {
      setActiveItem(this);
    });

    // Click event to redirect to Instagram
    item.addEventListener("click", function () {
      const instagramUrl = this.getAttribute("data-instagram");
      if (instagramUrl) {
        window.open(instagramUrl, "_blank");
      }
    });
  });

  // Set center image as active by default
  const centerImage = document.querySelector(".social-image-item.center-image");
  if (centerImage) {
    setActiveItem(centerImage);
  }

  console.log("The Jewel Hotel website loaded successfully!");
});

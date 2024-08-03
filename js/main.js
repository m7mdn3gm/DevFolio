// ====== Change background Nav-Bar ======
const navBar = document.querySelector("nav");
const imageChange = document.querySelector("nav .image img");
window.addEventListener("scroll", () => {
  if (scrollY >= 55) {
    navBar.classList.add("light-animation");
  } else {
    navBar.classList.remove("light-animation");
  }
});

// ====== Change Nav-Bar Links In Scroll ======
const links = document.querySelectorAll(".navbar .navbar-nav .nav-item a");
const linkHome = document.getElementById("linkHome");
const linkAbout = document.getElementById("linkAbout");
const linkServices = document.getElementById("linkServices");
const linkWork = document.getElementById("linkWork");
const linkBlog = document.getElementById("linkBlog");
const linkContact = document.getElementById("linkContact");
window.addEventListener("scroll", () => {
  if (scrollY >= -5 && scrollY <= 550) {
    links.forEach((allLink) => {
      linkHome.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 550 && scrollY <= 1200) {
    links.forEach((allLink) => {
      linkAbout.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 1200 && scrollY <= 2600) {
    links.forEach((allLink) => {
      linkServices.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 2600 && scrollY <= 3900) {
    links.forEach((allLink) => {
      linkWork.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 3900 && scrollY <= 4600) {
    links.forEach((allLink) => {
      linkBlog.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 4600) {
    links.forEach((allLink) => {
      allLink.classList.remove("active");
      linkContact.classList.add("active");
    });
  }
});

// ====== Auto Write Words ======
let x = 0;
const autoWrite = document.querySelector(".auto-write");
const autoWriteFn = () => {
  const title = "Freelancer ";
  autoWrite.innerHTML = title.slice(0, x);
  x++;
  if (title.length < x) {
    x = 1;
  }
};
const SetIntervalAutoWrite = setInterval(autoWriteFn, 300);

// ====== Arrow Back Up ======
const backUp = document.querySelector(".back-up");
window.addEventListener("scroll", () => {
  if (scrollY >= 300) {
    backUp.style.display = "flex";
  } else {
    backUp.style.display = "none";
  }
});
backUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ====== Counter Increase Numbers ======
const numbersIncrease = document.querySelectorAll("#num");
numbersIncrease.forEach((item) => {
  let startValue = 0;
  let endValue = item.dataset.value;
  let counter = setInterval(() => {
    startValue++;
    item.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, 1000 / endValue);
});



let animateRef = [];


export const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

export const addToRef = (el) => {
  if (el && !animateRef.includes(el)) {
    animateRef.push(el);
  }
};

export const animateCurrentElements = () => {
  animateRef.forEach((el) => observer.observe(el));
  animateRef = [];
};

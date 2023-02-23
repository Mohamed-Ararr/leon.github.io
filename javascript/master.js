window.onload = function () {
  // add scroller to the website
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scroller = document.querySelector(".scroller");

  window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`;
  });

  //   update the year dynamically
};

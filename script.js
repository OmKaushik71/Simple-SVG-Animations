window.addEventListener("DOMContentLoaded", () => {
  const tickPath = document.querySelector("#tick path");
  console.log(tickPath.getTotalLength());
  const downloadPath = document.querySelector("#download path");
  console.log(downloadPath.getTotalLength());

  function pageScroll() {
    window.scrollBy(0, 1);
    scrolldelay = setTimeout(pageScroll, 3);
  }
  function bottomScroll() {
    window.scrollTo(0, document.body.scrollHeight);
    // scrolldelay = setTimeout(bottomScroll, 10);
  }
  setTimeout(bottomScroll, 2000);
});

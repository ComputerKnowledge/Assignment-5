document
  .getElementById("fast-donatenow")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addDataToElement("fast-donation", takeInput("fast-input"));
  });
document
  .getElementById("second-donatenow")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addDataToElement("second-donation", takeInput("second-input"));
  });
document
  .getElementById("third-donatenow")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addDataToElement("third-donation", takeInput("third-input"));
  });
document.getElementById("donate-page").addEventListener("click", function () {
  showSection("donation");
  document.getElementById("donate-page").classList.add("bg-lime-300");
  document.getElementById("donate-page").classList.remove("bg-white");
  document.getElementById("history-page").classList.add("bg-white");
  document.getElementById("history-page").classList.remove("bg-lime-300");
});
document.getElementById("history-page").addEventListener("click", function () {
  showSection("history");
  document.getElementById("history-page").classList.remove("bg-white");
  document.getElementById("history-page").classList.add("bg-lime-300");
  document.getElementById("donate-page").classList.remove("bg-lime-300");
  document.getElementById("donate-page").classList.add("bg-white");
});
document.getElementById("blog-page").addEventListener("click", function () {
  window.open("./blog.html", "_self");
});

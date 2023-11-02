const liteon = document.getElementById("liteon");
const lliteoff = document.getElementById("liteoff");
const liteimg = document.getElementById("liteimg");

// const rana = () => {
//   alert("Touch On");
// };
// liteon.addEventListener("click", rana);

// const tara = () => {
//   alert("Touch Off");
// };
// lliteoff.addEventListener("click", tara);

liteon.addEventListener("click", () => {
  liteimg.src = "./img/on.jpg";
});
lliteoff.addEventListener("click", () => {
  liteimg.src = "./img/off.jpg";
});

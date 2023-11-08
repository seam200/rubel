const mona = document.getElementById("mona");
const rana = document.getElementById("rana");
const loop = document.getElementById("loop");

document.body.style.cssText = `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

mona.innerHTML = "jara is the cute bedi";
mona.style.cssText = `
    letter-spacing: 4px;
    font-size: 24px;
    text-shadow: 2px 2px 2px orange;
    background: black;
    color: red;
    padding: 20px;
`;
mona.style.textTransform = "uppercase";

// function tara() {
//   alert("Don't sadi me");
// }
alert("hello");

const tara = () => {
  mona.innerHTML = "one two ....";
};

rana.addEventListener("click", () => {
  mona.innerHTML = "dasssssssssssss";
});

mona.addEventListener("mouseover", () => {
  mona.innerHTML = "dahsfahdlfsdf";
});

// let x = 0;
// while (x < 10) {
//   loop.innerHTML += x;
//   x++;
// }

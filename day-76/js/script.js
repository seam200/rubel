document.body.style.cssText = `
margin : 0;
padding : 0;
box-sizing : borderbox;
font-family : arial
`;

const main = document.querySelectorAll(".main")[0];
const arg = main.children[0];
main.style.cssText = `
width: 100%;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
`;

arg.style.cssText = `
width:400px;
height:250px;
border:20px solid transparent;
border-image: url("../img/bg.jpg") 200 / 20px;
box-shadow: 0 0 10px #000, 0 0 10px #000 inset;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`;

const MonthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "june",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const h2 = document.createElement("h2");
const p = document.createElement("p");
const p2 = document.createElement("p");

p.classList.add("brazil");
p2.classList.add("dhaka");
h2.classList.add("argText");

h2.innerHTML = "Argentina";
const rubel = () => {
  const d = new Date();
  const hours = d.getHours();
  let h, a;
  if (hours > 12) {
    h = hours - 12;
    a = "PM";
  } else if (hours == 12) {
    h = hours;
    a = "PM";
  } else {
    h = hours;
    a = "AM";
  }

  const min = d.getMinutes();
  const sec = d.getSeconds();
  const month = d.getMonth();
  const year = d.getFullYear();
  const day = d.getDate();
  p.innerHTML = day + "/" + MonthArr[month] + "/" + year;
  p2.innerHTML = `${h} : ${min} : ${sec} :${a} `;
};

setInterval(rubel, 1000);
arg.appendChild(h2);
arg.appendChild(p);
arg.appendChild(p2);

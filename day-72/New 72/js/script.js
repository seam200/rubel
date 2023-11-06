const dhaka = document.getElementById("dhaka");
const borishal = document.getElementById("borishal");
const sylhte = document.getElementById("sylhte");
const rajshahi = document.getElementById("rajshahi");
const dhakaDtls = document.getElementById("dhakaDtls");
const borishalDtls = document.getElementById("borishalDtls");
const sylhteDtls = document.getElementById("sylhteDtls");
const rajshahiDtls = document.getElementById("rajshahiDtls");

dhaka.addEventListener("click", () => {
  dhaka.classList.add("active");
  borishal.classList.remove("active");
  sylhte.classList.remove("active");
  rajshahi.classList.remove("active");
  dhakaDtls.classList.remove("d-none");
  borishalDtls.classList.add("d-none");
  sylhteDtls.classList.add("d-none");
  rajshahiDtls.classList.add("d-none");
});
borishal.addEventListener("click", () => {
  dhaka.classList.remove("active");
  borishal.classList.add("active");
  sylhte.classList.remove("active");
  rajshahi.classList.remove("active");
  dhakaDtls.classList.add("d-none");
  borishalDtls.classList.remove("d-none");
  sylhteDtls.classList.add("d-none");
  rajshahiDtls.classList.add("d-none");
});
sylhte.addEventListener("click", () => {
  dhaka.classList.remove("active");
  borishal.classList.remove("active");
  sylhte.classList.add("active");
  rajshahi.classList.remove("active");
  dhakaDtls.classList.add("d-none");
  borishalDtls.classList.add("d-none");
  sylhteDtls.classList.remove("d-none");
  rajshahiDtls.classList.add("d-none");
});
rajshahi.addEventListener("click", () => {
  dhaka.classList.remove("active");
  borishal.classList.remove("active");
  sylhte.classList.remove("active");
  rajshahi.classList.add("active");
  dhakaDtls.classList.add("d-none");
  borishalDtls.classList.add("d-none");
  sylhteDtls.classList.add("d-none");
  rajshahiDtls.classList.remove("d-none");
});

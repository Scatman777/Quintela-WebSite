//// Quintela-Content ////////

const btn1 = document.querySelector(".btn1");
const section__news = document.querySelector(".main-content__body-info");

btn1.addEventListener("click", () => {
  section__news.classList.toggle("hidden");
});

////// Quintela-Company ////////

const btn2 = document.querySelector(".btn1");
const body__company = document.querySelector(".main-company__body-company");

btn2.addEventListener("click", () => { 
  body__company.classList.toggle("hidden"); 
});

////// Quintela-Trade ////////

const btn3 = document.querySelector(".btn1");
const body__trade = document.querySelector(".main-trade__body-trade");

btn3.addEventListener("click", () => { 
  body__trade.classList.toggle("hidden"); 
});

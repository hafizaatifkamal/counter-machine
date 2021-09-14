
let minus_button = document.getElementById("minus");
let plus_button = document.getElementById("plus");
let reset_button = document.getElementById("reset");

let counter = document.getElementById("counter");

let count = 0;

minus_button.addEventListener("click", () => {
  
  if (count > 0) {
    count--;
    counter.innerHTML = count;
  } else {
    alert("Negative matt bano bhai, Be Positive!")
  }
})

plus_button.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
})

reset_button.addEventListener("click", () => {
  count = 0;
  counter.innerHTML = count;
})


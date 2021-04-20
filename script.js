let removeBtn = Array.from(document.getElementsByClassName("fa-trash-alt"));
console.log(removeBtn);

for (let rmv of removeBtn) {
  rmv.addEventListener("click", function () {
    rmv.parentNode.remove();
    sum()
  });
}

let BtnPlus = Array.from(document.querySelectorAll(".add"));
console.log(BtnPlus);
// for(let plus of  BtnPlus){
//     plus.addEventListener('click', function(){
//         plus.nextElementSibling.innerHTML++
//     })
// }

let qte = Array.from(document.querySelectorAll(".qte"));

for (let i = 0; i < BtnPlus.length; i++) {
  BtnPlus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    sum();
  });
}

let BtnMinus = Array.from(document.getElementsByClassName("minus"));
for (let min of BtnMinus) {
  min.addEventListener("click", function () {
    if (min.previousElementSibling.innerHTML > 0) {
      min.previousElementSibling.innerHTML--;
      sum()
    }
  });
}

function sum() {
  let qte = Array.from(document.querySelectorAll(".qte"));
  let price = Array.from(document.querySelectorAll(".price"));
  let s = 0;
  for (let i = 0; i < qte.length; i++) {
    // s=s+qte[i].innerHTML*price[i].innerHTML
    s += qte[i].innerHTML * price[i].innerHTML;
  }
  return (document.getElementById("totalp").innerHTML =
    "Shopping Bag total : $ " + s);
}


let hearts=document.getElementsByClassName('fa-heart')
for(let heart of hearts){
  heart.addEventListener('click', function(){

    heart.classList.toggle('myClass')
    // if(heart.style.color==='red'){
    //   heart.style.color='gray'
    // }
    // else{
    //   heart.style.color='red'
    // }
  })
}
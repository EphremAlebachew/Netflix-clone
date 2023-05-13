


let elPass = document.getElementById("password ").value;
let elEmail = document.getElementById("email").value;
let elform = document.getElementById("model");
let errorel = document.getElementById("error");
let infoel = document.getElementById("info");
// console.log(elform);
elform.onsubmit = validation;
function validation(e) {
  e.preventDefault();
  
  // get value from here
  
  // console.log(elEmail);
  
  // console.log(elPass);
  let forminfo = [];
  if (elEmail === "") {
    errorel.innerHTML = "Email is required";
  } else if (elPass === "") {
    errorel.innerHTML = "password is required";
  }
  else{
    errorel.innerHTML = "";
    infoel.innerHTML =
      forminfo +
      `email: ${elEmail}
      <br> password: ${elPass}`;
    document.getElementById("model").style.display = "none";
  }
}




let h3 = document.querySelector(".model91");
 console.log(h3);
let div = document.querySelector(".model15");
h3.addEventListener("click", () => {
  if ($(window).width() < 660) {
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
});
$(window).on("resize", function () {
  console.log("screen size changed");
  location.reload();
});


// let nameel = document.getElementById("name");
// let passwordel = document.getElementById("password");
// let formel = document.getElementById("form");
// let errorel = document.getElementById("error");

// formel.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let messages = [];
//     if (nameel.value === "") {
//         messages.push("Name is required")
//     }
    
//     if (passwordel.value === "") {
//         messages.push("password is required")
//     }
// errorel.innerText=messages.join(",")
// })




// console.log("Hello");

// let elform = document.getElementById("model");
// // console.log(elform);
// elform.onsubmit = validation;
// function validation(e) {
//   e.preventDefault();
//   let errorel = document.getElementById("error");
//   let infoel = document.getElementById("info");
//   // get value from here
//   let elEmail = document.getElementById("email").value;
//   console.log(elEmail);
//   let elPass = document.getElementById("passward").value;
//   console.log(elPass);
//   let forminfo = [];
//   if (elEmail === "") {
//     errorel.innerHTML = "Email is required";
//   } else if (elPass === "") {
//     errorel.innerHTML = "password is required";
//   } else {
//     // errorel.innerHTML = "";
//     infoel.innerHTML =
//       forminfo +
//       `email: ${elEmail}
//       <br> passward: ${elPass}`;
//     // document.getElementById("model").style.display = "none";
//   }
// }
// console.log("hello world");


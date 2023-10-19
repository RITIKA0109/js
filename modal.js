$('a[href$="#Modal"]').on("click", function () {
  $('#Modal').modal('show');
});

function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  let y = document.forms["myForm"]["pswd"].value;
  let z = document.forms["myForm"]["comnt"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
  else if (y == "") {
    alert("Password must be filled out");
    return false;
  }
  else if (z == "") {
    alert("Enter Comments");
    return false;
  }
  else {

    alert("Thank you for your submission!");
    return false;
  }
}



let form = document.forms["myForm"];
form.addEventListener("submit", getValues);
function getValues(event) {
  event.preventDefault();
  // let data = {
  //   "Email": this.email.value,
  //   "Password": this.pswd.value,
  //   "Comments": this.comnt.value,
  //   // "Number of Users": this.rangeValue.value
  // }

  let email = document.getElementById("email");
  let password = document.getElementById("pwd");
  let comments = document.getElementById("comment");

  if (email.value !== "" || password.value !== "" || comments.value !== ""){
    // alert("The form has been successfully submitted");
    console.log(
      `The form has a email of ${email.value} , password of ${password.value} and
      comments of ${comments.value}`
    );

    email.value="";
    password.value="";
    comments.value="";
  }



  // let out = `
	// 	<p>Email: <span>${data.email}</span></p>
	// 	<p>Password: <span>${data.pswd}</span></p>
	// 	<p>Comments: <span>${data.comnt}</span></p>
	// 	// <p>Number of Users: <span>${data.rangeValue}</span></p>
	// `;

  // // document.querySelector(".out code").innerHTML = out;
}
function validate(event) {

    // let allfields = document.getElementById("inputfield");
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    // let state = document.getElementById("state").value.trim();
    let zipcode = document.getElementById("zipcode").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    // let accountType = document.getElementById("personal").value.trim();
    
    let formValid = true;    

    // make sure first name length > 1
    if (fname.length < 1) {
        form.fname.style.backgroundColor = "tomato";
        formValid = false;
        event.preventDefault();
    }
    else form.fname.style.backgroundColor = "chartreuse";

    // make sure last name length > 1
    if (lname.length < 1) {
        form.lname.style.backgroundColor = "tomato";
        formValid = false;
        event.preventDefault();
    }
    else form.lname.style.backgroundColor = "chartreuse";
    
    // make sure address length > 1
    if (address.length < 1) {
        form.address.style.backgroundColor = "tomato";
        formValid = false;
        event.preventDefault();
    }
    else form.address.style.backgroundColor = "chartreuse";

    // make sure city length > 1
    if (city.length < 1) {
        form.city.style.backgroundColor = "tomato";
        formValid = false;
        event.preventDefault();
    }
    else form.city.style.backgroundColor = "chartreuse";

    // make sure zipcode length is == 5 and are all numbers
    if (!(zipcode.length == 5 && !isNaN(zipcode))) {
        form.zipcode.style.backgroundColor = "tomato";
        formValid = false;
        event.preventDefault();
    }
    else form.zipcode.style.backgroundColor = "chartreuse";

    // make sure phone number length is == 10 and are all numbers
    if (!(phone.length == 10 && !isNaN(phone))) {
        form.phone.style.backgroundColor = "tomato";
        formValid = false;
        event.preventDefault();
    }   
    else form.phone.style.backgroundColor = "chartreuse";

    // make sure email length is > 1 and passes the regular expression shown in validateEmail() function
    if (email.length < 1 || !validateEmail(email)) {
        form.email.style.backgroundColor = "tomato";
        formValid = false;
        event.preventDefault();
    }
    else form.email.style.backgroundColor = "chartreuse";

    // if the entire form is valid, submit and let the user know
    if (formValid) {
        window.alert("Form has been submitted. Thank You!");
    }
}

const validateEmail = (inputEmail) => {
    return inputEmail.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

let form = document.getElementById("contactForm");
form.addEventListener("submit", validate);


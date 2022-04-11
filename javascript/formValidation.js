function validate(event) {

    let form = document.querySelector("#contactForm");
    let fname = document.querySelector("#fname").value.trim();
    let lname = document.querySelector("#lname").value.trim();
    let address = document.querySelector("#address").value.trim();
    let city = document.querySelector("#city").value.trim();
    let zipcode = document.querySelector("#zipcode").value.trim();
    let phone = document.querySelector("#phone").value.trim();
    let email = document.querySelector("#email").value.trim();
    
    let formValid = true;    

    // Validate the text input elements contain data longer than one character.
    if (fname.length < 1) {
        form.fname.style.backgroundColor = "#FF6961";
        formValid = false;
        window.alert("Please enter a valid input for first name.");
        event.preventDefault();
    }
    else form.fname.style.backgroundColor = "#CAE7C1";

    if (lname.length < 1) {
        form.lname.style.backgroundColor = "#FF6961";
        formValid = false;
        window.alert("Please enter a valid input for last name.");
        event.preventDefault();
    }
    else form.lname.style.backgroundColor = "#CAE7C1";
    
    if (address.length < 1) {
        form.address.style.backgroundColor = "#FF6961";
        formValid = false;
        window.alert("Please enter a valid input for address.");
        event.preventDefault();
    }
    else form.address.style.backgroundColor = "#CAE7C1";

    if (city.length < 1) {
        form.city.style.backgroundColor = "#FF6961";
        formValid = false;
        window.alert("Please enter a valid input for city.");
        event.preventDefault();
    }
    else form.city.style.backgroundColor = "#CAE7C1";

    // Validate the zip code is numeric and is five digits long.
    if (!(zipcode.length == 5 && !isNaN(zipcode))) {
        form.zipcode.style.backgroundColor = "#FF6961";
        formValid = false;
        window.alert("Please enter a valid input for zipcode.");
        event.preventDefault();
    }
    else form.zipcode.style.backgroundColor = "#CAE7C1";

    // Validate the phone number is numeric and is 10 digits long.
    if (!(phone.length == 10 && !isNaN(phone))) {
        form.phone.style.backgroundColor = "#FF6961";
        formValid = false;
        window.alert("Please enter a valid input for phone.");
        event.preventDefault();
    }   
    else form.phone.style.backgroundColor = "#CAE7C1";

    // Validate the email address
    if (email.length < 1 || !validateEmail(email)) {
        form.email.style.backgroundColor = "#FF6961";
        formValid = false;
        window.alert("Please enter a valid input for email.");
        event.preventDefault();
    }
    else form.email.style.backgroundColor = "#CAE7C1";

    if (formValid) {
        window.alert("Form has been submitted. Thank You!");
    }
}

const validateEmail = (inputEmail) => {
    return inputEmail.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

let form = document.querySelector("#contactForm");
form.addEventListener("submit", validate);
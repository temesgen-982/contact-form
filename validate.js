const form = document.querySelector('form');

function validateForm(e) {

    e.preventDefault();

    let allValid = true; // This will track if all inputs are validated

    // validating the text inputs

    const textInputs = form.querySelectorAll('#first-name, #last-name, #message');

    textInputs.forEach( (input) => {
        if(!input.value){
            input.nextElementSibling.classList.remove("hidden");
            allValid = false;
        }else{
            input.nextElementSibling.classList.add("hidden");
        }
    });

    // Validating the email

    const email = form.querySelector('input[type="email"]');

    const emailRegex = /^\w+@\w+\.\w+$/; // abc@cd.cd kind of email
    
    if(!emailRegex.test(email.value)){
        email.nextElementSibling.classList.remove("hidden");
        allValid = false;
    }else{
        email.nextElementSibling.classList.add("hidden");
    }

    // Validating the radio buttons

    const radios = form.querySelectorAll('input[type="radio"]');
    let radioCheck = false;

    radios.forEach( (radio) => {
        if(radio.checked){
            radioCheck = true;
        }
    })

    const radioError = form.querySelector('.error-radio');

    if(!radioCheck){
        radioError.classList.remove("hidden");
        allValid = false;
    }else{
        radioError.classList.add("hidden");
    }

    // validating the checkboxes

    const checkbox = form.querySelector('input[type="checkbox"]');

    if(!checkbox.checked){
        checkbox.parentElement.parentElement.lastElementChild.classList.remove("hidden");
        allValid = false;
    }else{
        checkbox.parentElement.parentElement.lastElementChild.classList.add("hidden");
    }
    
    if(allValid){

        // showing the success div
        const successPage = document.querySelector(".sign-up-success");
        successPage.classList.remove("hidden");

        // Hide the success page after 2 seconds

        setTimeout(() => {
            successPage.classList.add("hidden");
        }, 2000);

        // reseting the form upon success
        form.reset();
    }
}

form.addEventListener('submit', validateForm);
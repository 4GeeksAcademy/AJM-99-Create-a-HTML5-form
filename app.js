// Form validation script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const inputs = form.querySelectorAll('input');
        let valid = true;

        inputs.forEach(function(input) {
            check(input);
            if (!input.checkValidity()) {
                valid = false;
            }
        });
        if (!valid) {
            event.preventDefault();
            event.stopPropagation();
        }
    });
});

function check(input) {
    if (!input.value && (input.id == "name" || input.id == "lastName" || input.id == "card" || input.id == "cvc" || input.id == "zip" || input.id == "amount" || input.id == "city")) {
        input.setCustomValidity('This field is required.');
    }else if (input.id == "card" && input.value.length != 16) {
        input.setCustomValidity("Card number must be 16 digits.");
    }else if (input.id == "cvc" && input.value.length != 3) {
        input.setCustomValidity("CVC must be 3 digits.");
    }else if (input.id == "zip" && (input.value.length != 5 && input.value.length != 6)) {
        input.setCustomValidity("Postal code must be 5 or 6 digits.");
    } else if (input.id == "amount" && (isNaN(input.value) || input.value <= 0)) {
        input.setCustomValidity("Amount must be a positive number.");
    } else if (input.id == "name" || input.id == "lastName" || input.id == "city") {
        const nameExpression = /^[a-zA-Z\s'-]+$/;
        if (!nameExpression.test(input.value)) {
            input.setCustomValidity("Please enter a valid name.");
        } else {
            input.setCustomValidity('');
        }
    } else {
        input.setCustomValidity('');
    }
}

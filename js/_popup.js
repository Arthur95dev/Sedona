//Textarea
const feedbackText = document.querySelector('.feedback');
const feedbackCount = document.querySelector('.feedback_count');
feedbackCount.textContent = `${feedbackText.value.length} / 300`;

feedbackText.addEventListener('input', function() {
    
    feedbackCount.textContent = `${feedbackText.value.length} / 300`;
})
//-----------
//Popup-failure
const popupFail = document.querySelector('.failure');
const popupFailClose = document.querySelector('.button-fail');

popupFailClose.addEventListener('click', function() {
    popupFail.classList.remove('popup_active');
})
//Popup-success
const popupSuccess = document.querySelector('.success');
const popupSuccessClose = document.querySelector('.button-success');

popupSuccessClose.addEventListener('click', function() {
    popupSuccess.classList.remove('popup_active');
})

//Validation form

const inputCollection = document.querySelectorAll('input');
const buttonForm = document.querySelector('.button-form');
const validationFunc = (item) => item.checkValidity() == false;
const inputRequire = [];
let scroll = 0;

window.addEventListener('scroll', function() {
    scroll = window.pageYOffset;
})

for (let i = 0; i < inputCollection.length; i++) {
    if (inputCollection[i].hasAttribute('required')) {
        inputRequire.push(inputCollection[i]);
    }
}

buttonForm.addEventListener('click', function(evt) {
    if ( inputRequire.some(validationFunc) || !feedbackText.checkValidity()) {
        popupFail.classList.add('popup_active');
        evt.preventDefault();
    } else {
        popupSuccess.classList.add('popup_active');
    }

    for (let i = 0; i < inputRequire.length; i++) {
        if (!inputRequire[i].checkValidity()) {
            inputRequire[i].style.border = `1px solid red`;
        }
    }
    if (!feedbackText.checkValidity()) {
        feedbackText.style.border = `1px solid red`;
    }
});

for (let i = 0; i < inputRequire.length; i++) {
    inputRequire[i].addEventListener('input', function() {
        if (inputRequire[i].checkValidity()) {
            inputRequire[i].style.border = `none`;
        } else {
            inputRequire[i].style.border = `1px solid red`;
        }
    })
}



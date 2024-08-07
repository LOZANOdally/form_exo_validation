function verifierFormulaire() {
    var inputs = document.getElementsByTagName('input');
    var textsArea = document.getElementsByTagName('textarea');
    var textArea = textsArea[0];
    var password = inputs[3];
    var small = document.querySelector('.text-danger');
    var label = document.getElementsByTagName('label');
    var lab = label[0];
    // iteration sur les inputs
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            inputs[i].style.borderColor = "red";

        }
       else{
            inputs[i].style.borderColor = "green";
        }
    }

    /*
            meme condition
     if (!textArea.value) {
        textArea.style.borderColor = "red";
     }
     else{
        textArea.style.borderColor = "green";
     }
     */

    // *****condition ternary
     !textArea.value ? textArea.style.borderColor = "red" : textArea.style.borderColor = "green";

    if (password.value.length < 8) {
        small.classList.remove('invisible');
        password.style.borderColor = "red";
    }
    else{
        small.classList.add('invisible');
        password.style.borderColor = "green";
    }
    if(!inputs[4].checked){
        lab.style.color = "red";
    }
    else{
        lab.style.color = "green";
    }


}


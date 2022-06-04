let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'clear'||screenValue[0]==')'||screenValue[0] != '(' && screenValue[screenValue.length-1] == ')' ) {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            if(screenValue[0]=='(' && screenValue[screenValue.length-1] != ')')
                  screenValue += ")";
            screen.value = eval(screenValue);
            screenValue = "";
        }
        else if(buttonText == "backspace") {
            screenValue = screenValue.slice(0,screenValue.length-1);
            screen.value = screenValue;
        }
        else if(buttonText == "^2"){
            screenValue = screenValue + "*" + screenValue;
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
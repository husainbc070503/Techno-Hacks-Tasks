let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(function (button) {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == '%') {
            var num = document.querySelector('input').value
            string = num / 100
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string
        }
        else {
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})
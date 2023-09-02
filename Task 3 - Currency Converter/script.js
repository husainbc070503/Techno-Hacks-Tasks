var cvrt_value = document.getElementById('cvrt');
var ex_rate = document.getElementById('exchange');
var from_curr = document.getElementById('from');
var switch_icon = document.getElementById('switch');
var to_curr = document.getElementById('to');
var btn = document.getElementById('btn_cvrt');
var text = document.getElementById('converted_money');
var from_curr_val = document.getElementById('from_curr');
var to_curr_val = document.getElementById('to_curr');
var to_amount = 0;

const calculate = () => {
    const from_val = from_curr.value;
    const to_val = to_curr.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from_val}`)
        .then((res) => res.json())
        .then((res) => {
            const rate = res.rates[to_val];
            ex_rate.value = rate;

            to_amount = (cvrt_value.value * rate).toFixed(2);
            from_curr_val.innerText = `${cvrt_value.value} ${from_val}`;
            to_curr_val.innerText = `${to_amount} ${to_val}`;
            text.style.display = 'block';
        })
}

switch_icon.onclick = () => {
    [from_curr.value, to_curr.value] = [to_curr.value, from_curr.value];
    calculate();
}

btn.onclick = () => {
    if (cvrt_value.value === "")
        return alert('Please enter value you want to convert');

    calculate();
}
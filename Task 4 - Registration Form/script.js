var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var name_err = document.getElementById('name_err');

var email = document.getElementById('email');
var email_err = document.getElementById('email_err');

var phone = document.getElementById('phone');
var phone_err = document.getElementById('phone_err');

var gender = document.querySelectorAll('.gender');
var gender_err = document.getElementById('gender_err');

var addr = document.getElementById('addr');
var addr_err = document.getElementById('addr_err');

var pswd = document.getElementById('password');
var pswd_err = document.getElementById('password_check');
var cpswd = document.getElementById('cpassword');
var skills = document.querySelectorAll('.skill');

var modal = document.getElementById('modal');
var details = document.getElementById('details');

const validateEmail = () => {
    let ev = email.value;

    if (!ev.match(/[a-z][0-9]*[@][a-z]*[.][a-z]/)) {
        email_err.innerText = "Invalid email";
        return false;
    }

    email_err.innerText = ""
    return true;
}

const validatePassword = () => {
    let pv = pswd.value;

    if (!pv.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}/)) {
        pswd_err.innerText = "Invalid password. It should contain one lowercase letter, one upper case letter, one digit and one special character. Length must be 8";
        return false;
    }

    pswd_err.innerText = "";
    return true;
}

const validatePhone = () => {
    let ph = phone.value;

    if (!ph.match(/[0-9]{10}/)) {
        phone_err.innerText = "Length should be equal to 10 and only digits";
        return false;
    }

    phone_err.innerText = "";
    return true;
}

const resetForm = () => {
    fname.value = lname.value = email.value = addr.value = pswd.value = cpswd.value = phone.value = "";
    gender.forEach((item) => item.checked = false);
    skills.forEach((item) => item.checked = false)
}

const checkConfirmPassword = () => {
    if (pswd.value !== cpswd.value) {
        pswd_err.innerText = "Mismatch password and confirm password";
        return false;
    }

    pswd_err.innerText = "";
    return true;
}

const formSubmit = () => {
    if (fname.value.length == 0 || lname.value.length == 0) {
        name_err.innerText = "Name is required";
        fname.focus();
        return false;
    } else name_err.innerText = "";

    if (email.value.length == 0) {
        email_err.innerText = "Email is required";
        email.focus();
        return false;
    } else email_err.innerText = "";

    if (addr.value.length == 0) {
        addr_err.innerText = "Address is required";
        addr.focus();
        return false;
    } else addr_err.innerText = "";

    if (pswd.value.length == 0) {
        pswd_err.innerText = "Password is required";
        pswd.focus();
        return false;
    } else pswd_err.innerText = "";

    if (cpswd.value.length == 0) {
        pswd_err.innerText = "Confirm Password is required";
        cpswd.focus();
        return false;
    } else pswd_err.innerText = "";

    if (!validateEmail() || !validatePassword() || !validatePhone() || !checkConfirmPassword())
        return false;

    let gender_val = "";
    gender.forEach((item) => {
        if (item.checked)
            gender_val = item.value;
    })

    let skills_val = [];
    skills.forEach((item) => {
        if (item.checked)
            skills_val.push(item.value);
    })

    localStorage.setItem('task-4-user', JSON.stringify({
        name: `${fname.value} ${lname.value}`,
        email: email.value,
        gender: gender_val,
        address: addr.value,
        password: pswd.value,
        skills: skills_val,
        phone: phone.value,
    }));

    alert('Registration Successful!!');
    resetForm();
    showDetails();

    return true;
}

const showDetails = () => {
    const det = JSON.parse(localStorage.getItem('task-4-user'));

    const html = `
    <div>
        <span class="fw-bold text-dark fs-4">Name: </span>
        <span class="text-dark my-4 fs-4">${det.name}</span>
    </div>

    <div>
        <span class="fw-bold text-dark fs-4">Email: </span>
        <span class="text-dark my-4 fs-4">${det.email}</span>
    </div>

    <div>
        <span class="fw-bold text-dark fs-4">Gender: </span>
        <span class="text-dark my-4 fs-4">${det.gender}</span>
    </div>

    <div>
        <span class="fw-bold text-dark fs-4">Phone No.: </span>
        <span class="text-dark my-4 fs-4">${det.phone}</span>
    </div>

    <div>
        <span class="fw-bold text-dark fs-4">Address: </span>
        <span class="text-dark my-4 fs-4">${det.address}</span>
    </div>

    <div>
        <span class="fw-bold text-dark fs-4">Skills: </span>
        <span class="text-dark my-4 fs-4">${det.skills.join(", ")}</span>
    </div>
    `

    details.innerHTML = html;
    modal.style.display = 'block';
}

const closeModal = () => modal.style.display = 'none';
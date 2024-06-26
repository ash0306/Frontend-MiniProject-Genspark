AOS.init({ duration: 1500 });

document.addEventListener("DOMContentLoaded", function (){
    login();
})

// Display Toast
function newToast(classBackground, message){
    const toastNotification = new bootstrap.Toast(document.getElementById('toastNotification'));
    var toast = document.getElementById('toastNotification');
    toast.className = 'toast align-items-center text-white border-0';
    toast.classList.add(`${classBackground}`);
    var toastBody = document.querySelector(".toast-body");
    if (toastBody) {
        toastBody.innerHTML = `${message}`;
    }
    toastNotification.show();
}

// Login Function
function login(){
    const form = document.querySelector("form.needs-validation");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation();
          return;
        }

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        fetch("http://localhost:5228/api/employee/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password:  password
            })
        }).then(async (response) => {
            var data = await response.json();
            
            sessionStorage.setItem("employeeToken", `${data.token}`);

            if (response.status == 200) {
                newToast("bg-success", "Login successful. Redirecting...")

                setTimeout(() => {
                    window.location.href = "./index.html";
                }, 2000);
            } else {
                newToast("bg-danger", "Invalid email or password. Try again.");
            }
        });
    });
}

// Event listener to toggle password view
document.getElementById("toggle-password").addEventListener("click",function(){
    var passwordInput = document.getElementById('password');
        var icon = this.querySelector('i');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('bi-eye');
            icon.classList.add('bi-eye-slash');
        }
})
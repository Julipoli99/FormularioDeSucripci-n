const boton = document.getElementById("boton");
const email = document.getElementById("inputEmail")


email.addEventListener("input", (e) => {
    inputValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(emailPattern.test(inputValue)){
        email.classList.remove("invalid")
        email.classList.add("valid")
    }
    else{
        email.classList.remove("valid")
        email.classList.add("invalid")
    }
})

boton.addEventListener("click", () => {
    if (email.classList.contains("valid")) {
        alert("Valid email, successful entry!")
        // Agregar lógica para enviar el formulario al servidor
    } else {
        alert("Invalid email. Please enter a valid email.");
    }

})
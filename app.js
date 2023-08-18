const boton = document.getElementById("boton");
const formulario = document.getElementById("form")
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
        alert("Email valido")
        // Agregar lógica para enviar el formulario al servidor
    } else {
        alert("Email no válido. Por favor, ingresa un email válido.");
    }

})












/*
function validarCampo(){
    
    let validado = true;

    if(campo.value.trim() === ""){
        alert("Por favor completa el campo")
        validado = false;
    }

    return validado
}

function dataInput() {
    campo.addEventListener("change", (e) => {
        console.log(e.target.value)
    })
} 


boton.addEventListener("click", (e) => {

    console.log(e)
    if(validarCampo()){
        dataInput()
        //formulario.submit()
        alert("Informacion enviada al mail")
    }
    
})
*/

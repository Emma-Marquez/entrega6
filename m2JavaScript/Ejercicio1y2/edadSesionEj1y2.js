let usuario1 = {
    nombre : "emmanuel",
    contrasenia : 1234
}
let edadIngresada = parseInt(prompt("indique su edad"))
if (edadIngresada >= 18) {
    let nombreIngresado=prompt("ingrese nombre").toLowerCase();
    if (nombreIngresado == usuario1.nombre){
       let contraIngresada = prompt("ingrese contraseña");
        if(contraIngresada == usuario1.contrasenia){
            document.write("Sesión iniciada")
        }else{
            alert("contraseña incorrecta");
            location.reload()
        };
    }else{
        alert("nombre inválido");
        location.reload()
    };
}else{
    alert("no autorizado");
    location.reload()
}
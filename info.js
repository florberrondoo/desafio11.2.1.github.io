
form.addEventListener("submit", (formulario)=> {
    let usuario= document.getElementById("nombre").value
    let apellido= document.getElementById("apellido").value
    let fecha= document.getElementById("date").value

    const data = {
        Nombre: usuario,
        Apellido: apellido,
        FechaDeNacimiento: fecha,
    }
    
    formulario.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))    
} )
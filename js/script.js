//  Declaracion de componentes con ayuda de la etiqueta id
const btnUsers = document.getElementById("btnUsers")
const contUsers = document.getElementById("contUsers")



//Declaracion de un evento para el boton de acuerdo a su declaracion previa
btnUsers.addEventListener("click", () =>{

    //Peticion a una api con ayuda de fetch, usa promesas .then
    fetch("https://jsonplaceholder.typicode.com/users")

    //Convertir la respuesta a JSON
    .then(Response=> Response.json())

    //promesa para recibir a los usuarios
    .then((users) =>[
        users.forEach((users) =>{
            console.log(users)
            const userCard = document.createElement("div")

            userCard.classList.add("usuario")

            userCard.innerHTML=`
                <h2>${users.name}</h2>
                <p>${users.email}</p>
                <p>${users.phone}</p>
                <p>${users.id}</p>
            `
            
            contUsers.appendChild(userCard)


        })
    ])
})



btnUsers.addEventListener("click" , ()=>{

    console.log("Si funciona el llamado")

})
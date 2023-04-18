$(document).ready(function () {

    const url = 'https://digimon-api.vercel.app/api/digimon'

        fetch(url)
        .then(response => response.json())
        .then(digimons =>{

            console.log(digimons)
            const list = $('#digimon-list')
            let digimonsList=''
            for (let index = 0; index < digimons.length; index++) {
                const digimon = digimons[index];
                digimonsList = digimonsList + `<li class="list-group-item list-group-item-action" id="${digimon.name}">${digimon.name}</li>`;


            }
            list.append(digimonsList)
        
        })


        $("#digimon-list").click(function(event) {
            digimonUrl= $(event.target).attr("id")

            const url = 'https://digimon-api.vercel.app/api/digimon/name/'+digimonUrl

            fetch(url)
            .then(response => response.json())
            .then(digimon =>{
    
                console.log(digimon)

                const card = $("#card")
                card.find("#image-digimon").attr("src", digimon[0].img)
                card.find("#card-title-digimon").text(digimon[0].name)
                card.find("#lvl-digimon").text(digimon[0].level)
            
            })

        })

        $("#button-search-digimon").click(function(event) {
            digimonIngresado = $('#input-search-digimon').val();

            if (!digimonIngresado) {
            alert("El cuadro de búsqueda está vacío, por favor ingrese un valor.");
            return;
            }
            
            const url = 'https://digimon-api.vercel.app/api/digimon/name/' + digimonIngresado;
        
            fetch(url)
            .then(response => {
                if (!response.ok) {
                throw new Error("No se encontró el dato en la base de datos.");
                }
                return response.json();
            })
            .then(digimon => {
                console.log(digimon);
                const card = $("#card");
                card.find("#image-digimon").attr("src", digimon[0].img);
                card.find("#card-title-digimon").text(digimon[0].name);
                card.find("#lvl-digimon").text(digimon[0].level);
            })
            .catch(error => {
                alert(error.message);
            });
        });

})



// $('#get-users').click(function () {
//     const url= 'https://jsonplaceholder.typicode.com/users'

//     fetch(url)
//     .then(response => response.json())
//     .then(users => {
//         console.log({users})
//         const list = $('#userList')
//         let userList=''
//         for (let index = 0; index < users.length; index++) {
//             const user = users[index];
//             userList = userList + `<li>${user.name},${user.email},${user.username}</li>` 
//         }
//         list.append(userList)
//     })
// })

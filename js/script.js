const gamesUrl = `https://rickandmortyapi.com/api/character/`;

fetch(gamesUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        document.querySelector(".loader").style.display = "none";
       createResultsGames(json);
       
    })
    .catch(function (error) {
        console.log(error);
    });

function createResultsGames(json) {
    const characters = json.results; // variable name could be some nicer name like characters, then when you call its properties is reads better

    const resultCardContainer = document.querySelector(".results");

    characters.forEach(function (character) {

        let divClass = document.createElement("div");
        
        divClass.className = "col-sm-6 col-md-4 col-lg-3";

        let type = "unknown";

        if (character.type !== "" && character.type !== undefined) { // always use strict equality operators when doing checks so that you do not fall victim to type coercion: https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
            type = character.type;
        }
        let html =
            ` <div class = "card">
                <img class = "image"src = "${character.image}"alt = "${character.name}">
                <div class = "details">
                <h4 class = "name"> ${character.name}</h4>
                <p>Type: ${type}</p>
                <p>${character.episode.length}</p>                                  
                    <a class="btn btn-primary" href="details.html?id=${character.id}">Details</a>
                </div> 
            </div> 
        </div>`;

        divClass.innerHTML = html;
        resultCardContainer.appendChild(divClass);
    });
}



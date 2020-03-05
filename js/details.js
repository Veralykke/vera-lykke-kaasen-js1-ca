const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.dir(params); 

let characterId = "";

if (params.has("id")) {
    characterId = params.get("id");
}

console.log(characterId);

const baseUrl = "https://rickandmortyapi.com/api/character/";
const characterUrl = `${baseUrl}${characterId}`;
console.log(characterUrl);


fetch (characterUrl)
    .then(function(response) {
    return response.json();
    }) 
    .then(function (json){
    createResultCharacter(json);
    })
    .catch(function (error) {
    console.dir(error);
    });


    function createResultCharacter(json) {
        console.log(json);
        
    const character = json; // variable name could be some nicer name like character, then when you call its properties is reads better
    

    const resultCardContainer = document.querySelector(".results")
    let divClass = document.createElement("div");
       

        let html = ` <div class="detail-container">
        <img class="details-image" src=${character.image} alt="Character Name" />
        <div class="detail-details">
            <h1>${character.name}</h1>
            <p>Status: <span class="value" id="status">${character.status}e</span></p>
            <p>Species: <span class="value" id="species">${character.species}</span></p>
            <p>Origin: <span class="value" id="origin">${character.origin.name}</span></p>
            <p>Location: <span class="value" id="location">${character.location.name}</span></p>                   
        </div>
    </div>`
    
    divClass.innerHTML = html;
    resultCardContainer.appendChild(divClass);

let pageTitle = document.querySelector("title")
pageTitle.innerHTML= json.name;

    }



    ////NB SETTE INN ERROR HER??/////////
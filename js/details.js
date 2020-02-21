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
    

    const resultCardContainer = document.querySelector(".results")
    let divClass = document.createElement("div");
       

        let html = ` <div class="detail-container">
        <img class="details-image" src=${json.image} alt="Character Name" />
        <div class="detail-details">
            <h1>${json.name}</h1>
            <p>Status: <span class="value" id="status">${json.status}e</span></p>
            <p>Species: <span class="value" id="species">${json.species}</span></p>
            <p>Origin: <span class="value" id="origin">${json.origin.name}</span></p>
            <p>Location: <span class="value" id="location">${json.location.name}</span></p>                   
        </div>
    </div>`
    
    divClass.innerHTML = html;
    resultCardContainer.appendChild(divClass);

let pageTitle = document.querySelector("title")
pageTitle.innerHTML= json.name;

    }



    ////NB SETTE INN ERROR HER??/////////
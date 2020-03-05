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
    const results = json.results;

    const resultCardContainer = document.querySelector(".results");

    results.forEach(function (result) {

        let divClass = document.createElement("div");
        
        divClass.className = "col-sm-6 col-md-4 col-lg-3";

        let type = "unknown";

        if (result.type != "" && result.type != undefined) {
            type = result.type;
        }
        let html =
            ` <div class = "card">
                <img class = "image"src = "${result.image}"alt = "${result.name}">
                <div class = "details">
                <h4 class = "name"> ${result.name}</h4>
                <p>Type: ${type}</p>
                <p>${result.episode.length}</p>                                  
                    <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
                </div> 
            </div> 
        </div>`;

        divClass.innerHTML = html;
        resultCardContainer.appendChild(divClass);
    });
}



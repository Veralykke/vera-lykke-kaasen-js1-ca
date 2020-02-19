


function updateDiv() {

    const genreHeading = document.querySelector("main");

    const formattedGenres = genreHeading.innerHTML.replace(/the/g,"replaced").replace(/The/g,"Replaced");
    
    genreHeading.innerHTML = formattedGenres;

}

setTimeout(updateDiv, 4000); 






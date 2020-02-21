


function updateDiv() {

    const genreHtmlPage = document.querySelector("main");

    const formattedGenres = genreHtmlPage.innerHTML.replace(/the/g,"replaced").replace(/The/g,"Replaced");
    
    genreHtmlPage.innerHTML = formattedGenres;

}

setTimeout(updateDiv, 4000); 




/////NB RART NAVN?? GENREHTMLPAGE??/////////////




window.addEventListener("DOMContentLoaded", navegator, false);
window.addEventListener("hashchange",navegator, false);

function navegator(){
    console.log({location});
    if (location.hash.startsWith("#home")){
        console.log("Bienvenido al home"); 
    }
    else if (location.hash.startsWith("#category=")){
        console.log("Bienvenido a categorias");
    }
    else if (location.hash.startsWith("#tendencias=")){
        console.log("Bienvenido a tendencias");
    }
    else if (location.hash.startsWith("#category=")){
        categoriesPage();
    }
    else {
        homePage();
    }
}
function homePage(){
    console.log("home");
    getCategoriesMovies();
    getPopularMovies();  
}
function trendsPage(){
    console.log("Tendencias");    
}
function searchPage(){
    console.log("Buscador");
}
function movieDetailsPage(){
    console.log("Detalle de la pelicula");
}
function categoriesPage(){
    console.log("Categorias");    
}
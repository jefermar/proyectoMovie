console.log("Probando");
const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {"Content-Type": "application/json; charset=utf-8"},
    params:{
        "api_key": API_KEY,
        "language": "es-ES",
    }
});
async function getPopularMovies() {
    const {data} = await api("movie/popular");
    const movies = data.results;
    console.log(movies);
    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
            <div class="movie-info">
                <span class="category"></span>
                <span class="rating">⭐ ${movie.vote_average}</span>
                <span class="year">${movie.release_date.split("-")[0]}</span>
            </div>
            <h4 class="movie-title">${movie.title}</h4>`;

            document.querySelector(".trendingPreview-movieList").appendChild(movieCard);

    });

}
async function getCategoriesMovies(){
    const {data} = await api("genre/movie/list?");
    const categories = data.genres;
    console.log(categories);
    categories.forEach(category=>{
        const categoryList = document.querySelector(".categoriesPreview-list");
        categoryList.innerHTML += `
            <div class="category-container ${category.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}">
            ${category.name}</div>`;
    });
}
getCategoriesMovies();
getPopularMovies();

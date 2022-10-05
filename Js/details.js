const animeId=location.search.slice(4);
console.log(location.search)


fetch("https://api.jikan.moe/v4/anime/"+ animeId)
  .then((response) => response.json())
  .then((movie) => {
const animeName = document.querySelector(".anime-name")
const picture = document.querySelector(".picture")
const paragraph = document.querySelector(".paragraph")
animeName.textContent = movie.data.title
picture.src = movie.data.images.jpg.image_url
paragraph.textContent = movie.data.synopsis
    console.log(movie);});
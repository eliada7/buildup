const title = document.querySelectorAll(".movieTitle");
const poster = document.querySelectorAll(".Top");
const duration = document.querySelectorAll(".duration");
const genres = document.querySelectorAll(".genres");
const scores = document.querySelectorAll(".score");
fetch(`https://api.jikan.moe/v4/top/anime`)
  .then((response) => response.json())
  .then((movie) => {
    console.log(movie);
    const movieData = movie.data;
    for (let index = 0; index < 8; index++) {
      const h4 = document.createElement("h4");
      h4.textContent = movieData[index].title;
      title[index].appendChild(h4);
      console.log(movieData[index]);
      poster[index].src = movieData[index].images.jpg.image_url;
      duration[index].textContent = movieData[index].duration;
      genres[index].textContent = movieData[index].genres[0].name;
      scores[index].textContent = movieData[index].score;

      title[index].addEventListener("click", () => {
        location.href = "details.html"+"?id=" + movieData[index].mal_id ;
        title.forEach((detail) => {
          const animeName = document.querySelector(".anime-name");

    
        });
        
      });
    }
  });

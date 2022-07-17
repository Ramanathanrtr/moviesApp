const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+APIKEY+"&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/";


async function getMovies() {
    const resp = await fetch(APIURL);
    const respData =await resp.json();

  respData.results.forEach(movie => {
    const { poster_path, title, vote_average, overview} = movie;
    const movieEl = document.createElement("div");
    console.log("ListData :" +movie.title);
    movieEl.classList.add("movie");
        console.log("ListData1 :" +movieEl);

    movieEl.innerHTML = `<img src="${IMGPATH + poster_path}" alt="${title}"/>


        <div class="movie-info">
          <h3>${title}</h3>
          <span>${vote_average}</span>
          
        </div>
<p>${overview}</p>`
    

        document.body.appendChild(movieEl);
  });

    // respData.results.forEach(movie => {
    //     const img = document.createElement("img");
    //     img.src = IMGPATH + movie.poster_path;
    //     document.body.appendChild(img);
        
    // })

    console.log(respData.results);

    return respData;
}

getMovies();



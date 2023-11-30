let contenedor = document.querySelector("#track-list")
console.log(contenedor)
axios.get('https://leonardoapi.onrender.com/music')
.then(
    // Callback
    (response) => {
        let canciones = response.data
        canciones.map( (cancion) => {
            let componet = document.createElement("div")
            componet.classList.add("song")
            componet.innerHTML = `
            <img src="${cancion.path.front}" alt="">
            <ul class="info">
                <li>${cancion.title}</li>
                <li>${cancion.author}</li>
            </ul>
            <div class="heart-play">
                    <img src="assets/images/heart (1).svg" alt="">
                    <img src="assets/images/player-play-filled (1).svg" alt="">
                   </div>
            <p>${cancion.duration}</p>
            `
            componet.addEventListener("click", () => {
                document.querySelector("#current-song-img")
                .setAttribute("src", cancion.path.front)
                document.querySelector("#current-song-audio")
                .setAttribute("src", cancion.path.audio)
                document.querySelector("#current-song-title").innerHTML = cancion.title  
                document.querySelector("#current-song-author").innerHTML = cancion.author
                console.log(`Se hizo click en ${cancion.title}`)
            })
            contenedor.appendChild(componet)
     } )
 }
 )


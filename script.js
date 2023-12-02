let contenedor = document.querySelector("#track-list");
axios.get("https://leonardoapi.onrender.com/music").then(
  // Callback
  (response) => {
    const audioDOM = document.querySelector("#current-song-audio");
    const audioTitleDOM = document.querySelector("#current-song-title");
    const audioAuthorDOM = document.querySelector("#current-song-author");
    const audioImgDOM = document.querySelector("#current-song-img");
    let songs = response.data;
    songs.map((song) => {
      let component = document.createElement("div");
      component.classList.add("song");
      component.innerHTML = `
            <img src="${song.path.front}" alt="">
            <ul class="info">
                <li>${song.title}</li>
                <li>${song.author}</li>
            </ul>
            <div class="heart-play">
                    <img src="assets/images/heart (1).svg" alt="">
                    <img src="assets/images/player-play-filled.svg" alt="">
                   </div>
            <p>${song.duration}</p>
            `;
      component.addEventListener("click", () => {
        audioImgDOM.setAttribute("src", song.path.front);
        audioDOM.setAttribute("src", song.path.audio);
        audioTitleDOM.innerHTML = song.title;
        audioAuthorDOM.innerHTML = song.author;
        console.log(`Se hizo click en ${song.title}`);
      });
      contenedor.appendChild(component);
    });

    if (songs.length > 0) {
      // Initial Song
      const song = songs[0];
      audioImgDOM.setAttribute("src", song.path.front);
      audioDOM.setAttribute("src", song.path.audio);
      audioTitleDOM.innerHTML = song.title;
      audioAuthorDOM.innerHTML = song.author;
    }

    const btnCenterDOM = document.querySelector("#btn-center");
    if (audioDOM.paused) {
      btnCenterDOM.setAttribute("src", "assets/images/player-play-filled.svg");
    } else {
      btnCenterDOM.setAttribute(
        "src",
        "assets/images/player-pause-filled verde1.svg"
      );
    }

    btnCenterDOM.addEventListener("click", () => {
      if (audioDOM.paused) {
        audioDOM.play();
        btnCenterDOM.setAttribute(
          "src",
          "assets/images/player-pause-filled verde1.svg"
        );
      } else {
        audioDOM.pause();
        btnCenterDOM.setAttribute(
          "src",
          "assets/images/player-play-filled.svg"
        );
      }
    });
  }
);

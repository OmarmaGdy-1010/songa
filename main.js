
const img = document.querySelector('.image img');
const image = document.querySelector('.image ');
const artist = document.querySelector('.image .artist');
const track_name = document.querySelector('.image .track-name');
const time_line_Slider = document.querySelector('.slider-time .time-line');
const current_Time = document.querySelector('.slider-time .current');
const duration_Time = document.querySelector('.slider-time .duration');
const volume_icon = document.querySelector('.slider-volume .volume-icon');
const volume_Slider = document.querySelector('.slider-volume .volume');
const pre_Btn = document.querySelector('.controls .pre');
const turn_on_Btn = document.querySelector('.controls .turn-on');
const next_Btn = document.querySelector('.controls .next');
const audio = document.getElementById('audio');



turn_on_Btn.addEventListener('click', () => {


        if (turn_on_Btn.className.includes("pause")) {
            // this.classList.add("pause")
            let pause_btn = document.querySelector(".pause");
            pause_btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            turn_on_Btn.classList.toggle("pause");
            turn_on_Btn.classList.toggle("play");
            audio.play();
        } else if (turn_on_Btn.className.includes("play")) {
            let play_btn = document.querySelector(".play");
            play_btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
            audio.pause();

            turn_on_Btn.classList.toggle("play");
            turn_on_Btn.classList.toggle("pause");
        }


});

let currVolume = audio.volume
volume_icon.onclick = () => {
    if (volume_icon.className.includes("up")) {
        volume_icon.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
        audio.volume = '0' 
        volume_icon.classList.remove("up")
        volume_icon.classList.add("mute")
    } else if (volume_icon.className.includes("mute")) {
        volume_icon.innerHTML = `<i class="fa-solid fa-volume-up"></i>`
        audio.volume = currVolume
        volume_icon.classList.add("up");
        volume_icon.classList.removeadd("mute")
}

};
volume_Slider.addEventListener('change', () => {
    audio.volume = volume_Slider.value / 10
if (volume_icon.className.includes("mute")) {
    volume_icon.innerHTML = `<i class="fa-solid fa-volume-up"></i>`;
    audio.volume = currVolume;
    volume_icon.classList.add("up");
    volume_icon.classList.removeadd("mute");
}
})
volume_Slider.onclick = function () {
    console.log(audio.volume);
}


const getsong =  (i) => {

    time_line_Slider.value = 0;
    let song = songs[ i ];
    currentSong = i;
    audio.src = song.path;
    img.src = song.img;
    artist.innerHTML = song.artist;
    track_name.innerHTML = song.name;
current_Time.innerHTML = "00:00"
    setTimeout(() => {
        time_line_Slider.max = audio.duration;
        duration_Time.innerHTML = formatDate(audio.duration);
    }, 300);

};




getsong(0);


function formatDate(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (min < 10) {
        min = `0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}


setInterval(() => {
    time_line_Slider.value = audio.currentTime;
    current_Time.innerHTML = formatDate(audio.currentTime);
}, 1000);

time_line_Slider.addEventListener('change', () => {
    audio.currentTime = time_line_Slider.value;
});


next_Btn.addEventListener('click', () => {
    if (currentSong >= songs.length - 1) {
        currentSong = 0
    } else {
        currentSong++
    }
    console.log("n", currentSong);
    getsong(currentSong);
    audio.play()

});


pre_Btn.addEventListener('click', () => {
    if (currentSong <= 0) {
        currentSong = songs.length-1
    } else {
        currentSong--
    }
    
    getsong(currentSong);
    console.log("p");
    audio.play()
});


audio.onplay = function () {
    image.style.opacity = "1"
    img.style = "animation-name: play;"
}
audio.onpause = function () {
    image.style.opacity = "0.7"
    img.style = "animation-name: pause;"
}





































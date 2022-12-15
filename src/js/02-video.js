import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle(event => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(event.seconds));
}, 1000) 
);


player
.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))
.catch(function (error) {
    console.error(error);
});

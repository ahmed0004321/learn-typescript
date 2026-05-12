

interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}
//implementation
class MusicPlayer implements MediaPlayer{
    //method
    play(){
        console.log(`playing music`);
    }
    pause(){
        console.log(`music paused`);
    }
    stop(){
        console.log('music stoped');
    }
}

const oasifPlayer = new MusicPlayer();
oasifPlayer.play();
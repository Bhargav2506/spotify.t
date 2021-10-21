console.log("Welcome to spotify");

let songindex=0;
let audioElement = new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');


let songs = [
    {songName : "Who's in your head", filePath:"song1/1.mp3" ,coverPath:"who.jpg"},
    {songName : "Second Emotion", filePath:"song1/2.mp3" ,coverPath:"secon.jpg"},
    {songName : "No Promises", filePath:"song1/3.mp3" ,coverPath:"no.jpg"},
    {songName : "Mood", filePath:"song1/4.mp3" ,coverPath:"moo.jpg"},
    {songName : "Shivers", filePath:"song1/5.mp3" ,coverPath:"shi.png"},
    {songName : "Stay", filePath:"song1/6.mp3" ,coverPath:"stay.jpg"},
]

songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle' );
        masterPlay.classList.add('fa-pause-circle');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})



myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})


audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    
    index=parseInt(e.target.id); 
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `${index+1}.mp3`;
    masterSongName.innerText=songs[index].songName;  
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle' );
    masterPlay.classList.add('fa-pause-circle');
   

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=5){
    index=0;
    }
    else
    {
        index+=1;
    }
    audioElement.src = `${index+1}.mp3`; 
    masterSongName.innerText=songs[index].songName; 
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle' );
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
    index=0;
    }
    else
    {
        index-=1;
    }
    audioElement.src = `${index+1}.mp3`;
    masterSongName.innerText=songs[index].songName; 
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle' );
    masterPlay.classList.add('fa-pause-circle');
})




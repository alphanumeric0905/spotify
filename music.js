console.log("welcome! to spotift");
// 1.mp3
let songIndex=1;
let mainPlay=document.querySelector("#mainplay");
let audioElement=new Audio("seedhe1.mp3");
let timeStamp=document.querySelector(".level");
let songList=Array.from(document.getElementsByClassName("song-list"));
let smallPlay=Array.from(document.getElementsByClassName("small-play"));
let prev=document.getElementById("previous");
let nxt=document.getElementById("next");
// console.log(smallPlay);
// let dur=Array.from(document.);

// console.l
// console.log(nxt);
// og(prev);

let songs=[
    {songName:"seedhe maut",filePath:"seedhe1.mp3",coverPath:"seedhe1.webp"},
    {songName:"1",filePath:"seedhe2.mp3",coverPath:"seedhe2.png"},
    {songName:"2",filePath:"seedhe3.mp3",coverPath:"seedhe3.png"},
    {songName:"3",filePath:"seedhe4.mp3",coverPath:"seedhe4.png"},
    {songName:"4",filePath:"seedhe5.mp3",coverPath:"seedhe5.png"},
    {songName:"5",filePath:"seedhe6.mp3",coverPath:"seedhe6.png"}
];

songList.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("title")[0].innerText=songs[i].songName;
    

});

const allPlay1=()=>{
    smallPlay.forEach((element)=>{
        element.classList.add("fa-circle-play");
    });
}

// mainPlay.addEventListener("click",()=>{
//     if(audioElement.played){
//         audioElement.pause();
//         mainPlay.classList.remove("fa-circle-pause");
//         mainPlay.classList.add("fa-circle-play");
//         allPlay1();
//     }

mainPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mainPlay.classList.remove("fa-circle-play");
        mainPlay.classList.add("fa-circle-pause");
    }else {
        audioElement.pause();
        mainPlay.classList.remove("fa-circle-pause");
        mainPlay.classList.add("fa-circle-play");
        
    }


});

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    timeStamp.value=progress;
 
});

timeStamp.addEventListener("change",()=>{
   
    audioElement.currentTime=((timeStamp.value*audioElement.duration)/100);
});

const allPlay=()=>{
    smallPlay.forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");


    });


};





smallPlay.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        allPlay();
        songIndex=parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src=`seedhe${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        mainPlay.classList.remove("fa-circle-play");
        mainPlay.classList.add("fa-circle-pause");
    });

});

nxt.addEventListener("click",()=>{
    if(songIndex>=6){
        songIndex=1;
    }else {
        songIndex +=1;
    }
    audioElement.src=`seedhe${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    mainPlay.classList.remove("fa-circle-play");
    mainPlay.classList.add("fa-circle-pause");
});

prev.addEventListener("click",()=>{
    if(songIndex<=1){
        songIndex=1;
    }else {
        songIndex -=1;
    }
    audioElement.src=`seedhe${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    mainPlay.classList.remove("fa-circle-play");
    mainPlay.classList.add("fa-circle-pause");
});
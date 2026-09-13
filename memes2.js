const memes = [

{
image:"https://i.imgflip.com/30b1gx.jpg",
text:"When the code works on the first try 😎"
},

{
image:"https://i.imgflip.com/1bij.jpg",
text:"Me after fixing one bug and creating five new ones."
},

{
image:"https://i.imgflip.com/26am.jpg",
text:"Teacher: Any doubts? Me: I don't even know what I don't know."
},

{
image:"https://i.imgflip.com/2wifvo.jpg",
text:"LeetCode Daily Challenge completed... Time to sleep peacefully."
},

{
image:"https://i.imgflip.com/4acd7j.png",
text:"Starts coding at 8 PM... Looks outside... It's morning."
}

];

const memeImg = document.getElementById("memeImg");
const caption = document.getElementById("caption");

function nextMeme(){

    const random = Math.floor(Math.random()*memes.length);

    memeImg.src = memes[random].image;
    caption.innerText = memes[random].text;

}

nextMeme();
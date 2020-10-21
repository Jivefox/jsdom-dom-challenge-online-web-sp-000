document.addEventListener("DOMContentLoaded", function() {
    
// const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const likes = {}
const newLike = document.createElement('li');
let activeNum

plus.addEventListener('click', upSecond);
minus.addEventListener('click', downSecond);
heart.addEventListener('click', createNewLike);
// pause.addEventListener('click', someFunc);
commentForm.addEventListener('submit', createNewComment)


function upSecond(event) {
    event.preventDefault();
    const counter = document.getElementById('counter')
    let counterNum = parseInt(counter.innerText, 10)
    
    counter.innerText = `${counterNum + 1}`;
};

function downSecond(event) {
    event.preventDefault();
    const counter = document.getElementById('counter')
    let counterNum = parseInt(counter.innerText, 10)

    counter.innerText = `${counterNum - 1}`
};

function createNewComment(event) {
    event.preventDefault();

    const commentInput = document.getElementById('comment-input');
    const newComment = document.createElement('p');
    newComment.innerText = commentInput.value;

    addNewComment(newComment);
    event.target.reset();
    commentInput.focus();
};

function addNewComment(comment) {
    document.getElementById('list').appendChild(comment);
};

function createNewLike() {
    activeNum = parseInt(document.getElementById('counter').innerText)
    if (likes[activeNum]) {
        likes[activeNum]++
    }
    else {
        likes[activeNum] = 1
    }
        newLike.innerText = `The number ${activeNum} has been liked ${likes[activeNum]} times`
        addNewLike(newLike);
};

function addNewLike(like) {
    document.getElementsByClassName('likes')[0].appendChild(like);
};
// .addEventListener("setTimeOut")
});
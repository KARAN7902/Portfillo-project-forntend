
closeNextNav();
function openNextNav(){
    document.querySelector('.cancel-btn').style.visibility="visible";
    let navElement=document.querySelector('.nav-link-2');
    navElement.style.width="50%";
}

function closeNextNav(){
    document.querySelector('.nav-link-2').style.width="0px";
    document.querySelector('.cancel-btn').style.visibility="hidden";
}


function openNextFormSlide(){
    let slideElement=document.querySelector('.form-container');
    slideElement.style.zIndex="1";
}


function openPreviousFormSlide(){
    let slideElement=document.querySelector('.form-container2');
    slideElement.style.zIndex="1";
    let slideElement2=document.querySelector('.form-container');
    slideElement2.style.zIndex="5";
}
function openNextNav(){
    document.querySelector('.cancel-btn').style.visibility="visible";
    let navElement=document.querySelector('.nav-link-2');
    navElement.style.width="250px";
}

function closeNextNav(){
    document.querySelector('.nav-link-2').style.width="0px";
    document.querySelector('.cancel-btn').style.visibility="hidden";
}
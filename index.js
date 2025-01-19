
closeNextNav();
function openNextNav(){
    document.querySelector('.cancel-btn').style.visibility="visible";
    let navElement=document.querySelector('.nav-link-2');
    navElement.style.width="250px";
}

function closeNextNav(){
    document.querySelector('.nav-link-2').style.width="0px";
    document.querySelector('.cancel-btn').style.visibility="hidden";
}


function openNextFormSlide(){
    let slideElement=document.querySelector('.form-container');
    slideElement.innerHTML=``;
}


function openPreviousFormSlide(){
    let slideElement=document.querySelector('.form-contaier');
    slideElement.innerHTML=` <h2>Contact Me</h2>
            <form action="/send_email.php" method="post">
                <div class="upper-part">
    
                   
                    <input type="text" id="name" name="name" placeholder="Enter your name" required><br><br>
                   
                    <input type="email" id="email" name="email"  placeholder="Enter your email" required><br><br>
                   
                    <textarea id="message" name="message" placeholder="Enter your valueable Message here"  required></textarea><br><br>
    
                </div>
                <div class="lower-part">
                    <button onclick="openNextFormSlide();" type="button">Next</button>
                   <button>Submit</button>
                </div>`
}
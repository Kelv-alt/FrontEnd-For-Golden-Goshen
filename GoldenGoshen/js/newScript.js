// For scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
});

// For show/hide
const faq = document.querySelectorAll('.faqq');

faq.forEach(faqq => {
    faqq.addEventListener('click', () => {
        faqq.classList.toggle('open');

        // change sign
        const sign = faqq.querySelector('.faq_sign i');
        if(sign.className === 'fa-solid fa-plus'){
            sign.className = 'fa-solid fa-x'
        }
        else{
            sign.className = 'fa-solid fa-plus'
        }
    })
});



// Media queries
const menu = document.querySelector('.ul__menu');
const menuBtn = document.querySelector('#open_menu');
const closeBtn = document.querySelector('#close_menu');


menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

// close nav
const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav)


// video

var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 

// IELTS
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Close the dropdown if the user clicks outside of it







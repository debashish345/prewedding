// script.js
// ------------------------------------------------------------
// Core interactivity for the Wedding Showcase page.
// ------------------------------------------------------------

// ------- Music toggle ------------------------------------------------
const musicToggleBtn = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let musicPlaying = false;

musicToggleBtn.addEventListener('click', () => {
    musicPlaying = !musicPlaying;
    if (musicPlaying) {
        bgMusic.play();
        musicToggleBtn.textContent = '🔈';
    } else {
        bgMusic.pause();
        musicToggleBtn.textContent = '🔊';
    }
});

// Autoplay music on first user interaction (required by browsers)
window.addEventListener('click', () => {
    if (!musicPlaying) {
        bgMusic.play().then(() => { musicPlaying = true; musicToggleBtn.textContent = '🔈'; }).catch(()=>{})
    }
}, {once:true});

// ------- AOS (Animate On Scroll) initialization ------------------------
AOS.init({
    once: true, // animations happen only once
    offset: 120,
    duration: 800,
    easing: 'ease-out-quart'
});

// ------- Parallax effect for .parallax sections -----------------------
function parallaxScroll(){
    const parallaxEls = document.querySelectorAll('.parallax');
    parallaxEls.forEach(el => {
        const speed = el.dataset.speed ? parseFloat(el.dataset.speed) : 0.5;
        const yPos = window.scrollY * speed;
        el.style.transform = `translateY(${yPos}px)`;
    });
}
window.addEventListener('scroll', parallaxScroll);

// ------- Petal decoration (floating flowers) ---------------------------
function createPetals(count = 20){
    const body = document.body;
    for(let i=0;i<count;i++){
        const petal = document.createElement('div');
        petal.classList.add('petal');
        // random start position & delay
        const size = Math.random()*30 + 50; // 50‑80px
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${Math.random()*100}vw`;
        petal.style.animationDelay = `${Math.random()*5}s`;
        petal.style.animationDuration = `${8 + Math.random()*4}s`;
        body.appendChild(petal);
    }
}
createPetals();

// ------- Full‑view modal for images -----------------------------------
const modal = document.createElement('div');
modal.id = 'modal';
modal.innerHTML = `
    <img src="" alt="Full view" />
    <button class="download-btn">Download</button>
    <button class="close-btn" style="position:absolute;top:1rem;right:1rem;background:none;color:#fff;font-size:2rem;cursor:pointer;">&times;</button>
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.close-btn');
const downloadBtn = modal.querySelector('.download-btn');

closeBtn.addEventListener('click',()=>{modal.style.display='none';});
modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.style.display='none'; });

downloadBtn.addEventListener('click',()=>{
    const link = document.createElement('a');
    link.href = modalImg.src;
    link.download = '';
    link.click();
});

// Attach click handler to every grid item that contains an image
function attachImageModal(){
    const items = document.querySelectorAll('.grid-item img');
    items.forEach(img=>{
        img.style.cursor='pointer';
        img.addEventListener('click',()=>{
            modalImg.src = img.src;
            modal.style.display='flex';
        });
    });
}
attachImageModal();

// ------- Horizontal scroll guide (optional) ---------------------------
const guide = document.createElement('div');
guide.classList.add('scroll-guide');
guide.textContent = 'Scroll horizontally for more →';
document.body.appendChild(guide);

// Show guide only when horizontal overflow exists
function updateScrollGuide(){
    const hasOverflow = document.body.scrollWidth > window.innerWidth;
    guide.style.display = hasOverflow ? 'block' : 'none';
}
window.addEventListener('load', updateScrollGuide);
window.addEventListener('resize', updateScrollGuide);

// ------- Intro video transition ---------------------------------------
const introSection = document.getElementById('intro');
const introVideo = document.getElementById('intro-video');

introVideo.addEventListener('ended',()=>{
    // Fade out the intro and reveal the gallery
    introSection.style.transition = 'opacity 1.5s ease';
    introSection.style.opacity = '0';
    setTimeout(()=>{introSection.style.display='none';},1500);
    // Optionally start background music if not started yet
    if(!musicPlaying){bgMusic.play().then(()=>{musicPlaying=true; musicToggleBtn.textContent='🔈';});}
});

// If the video is very short (<5s) you may also auto‑skip after a timeout
setTimeout(()=>{ if(!introVideo.paused){ introVideo.pause(); introVideo.dispatchEvent(new Event('ended')); } }, 4000);

// ------------------------------------------------------------
// End of script.js
// ------------------------------------------------------------

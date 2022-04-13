let navbar = document.querySelector('.travel-header .travel-nav');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

// windows.onscroll = () => {
//     navbar.classList.remove('active');
// }

document.querySelectorAll('.video-text-wrap .video-container .control-btn-wrap .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        console.log(src);
        document.querySelector('.video-text-wrap .video-container .default-screen').src = src;
        // console.clear();
    }
})
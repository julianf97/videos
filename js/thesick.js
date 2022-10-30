// Mobile - Videos
const contenedorPrincipalVideo = document.getElementById("contenedorprincipalvideo");
const contenedorPrincipalVideo2 = document.getElementById("contenedorprincipalvideo2");
const contenedorPrincipalVideo3 = document.getElementById("contenedorprincipalvideo3");
const contenedorPrincipalVideo4 = document.getElementById("contenedorprincipalvideo4");
const videoPrincipal = document.getElementById("videoprincipal");
const videoPrincipal2 = document.getElementById("videoprincipal2");
const videoPrincipal3 = document.getElementById("videoprincipal3");
const videoPrincipal4 = document.getElementById("videoprincipal4");
const videoChico1 = document.getElementById("videochico1");
const videoChico2 = document.getElementById("videochico2");
const videoChico3 = document.getElementById("videochico3");
const videoChico4 = document.getElementById("videochico4");

videoChico2.addEventListener("click", ()=>{

    contenedorPrincipalVideo2.classList.remove('noactivo');
    contenedorPrincipalVideo2.style.display = "block";
    
    contenedorPrincipalVideo.style.display = "none";
    contenedorPrincipalVideo3.style.display = "none";
    contenedorPrincipalVideo4.style.display = "none"

});

videoChico1.addEventListener("click", ()=>{
    
    contenedorPrincipalVideo.style.display = "block";

    contenedorPrincipalVideo2.style.display = "none";
    contenedorPrincipalVideo3.style.display = "none";
    contenedorPrincipalVideo4.style.display = "none"
});

videoChico3.addEventListener("click", ()=>{
    
    contenedorPrincipalVideo3.classList.remove('noactivo');
    contenedorPrincipalVideo3.style.display = "block";

    contenedorPrincipalVideo.style.display = "none";
    contenedorPrincipalVideo2.style.display = "none";
    contenedorPrincipalVideo4.style.display = "none"
});

videoChico4.addEventListener("click", ()=>{
    
    contenedorPrincipalVideo4.classList.remove('noactivo');
    contenedorPrincipalVideo4.style.display = "block";

    contenedorPrincipalVideo.style.display = "none";
    contenedorPrincipalVideo2.style.display = "none";
    contenedorPrincipalVideo3.style.display = "none";
});

// import * as d3 from 'd3';
// import * as THREE from 'three';

// const box = document.querySelector(".box");
// document.addEventListener("click", function (event) {
//     if (event.target.closest(".box")) {
//       return  box.classList.add("js-is-hidden");
//     } 
// })



// //canvas 
// export var canvas = d3
//     .select(mapContainer)
//     .append('canvas')
//     .attr('id', 'mapCanvas')
//     .attr('width', window.innerWidth)
//     .attr('height', window.innerHeight)

// //context rendering
// canvas.node().getContext('webgl');


// //mouse
// export var mouse = new THREE.Vector2();


//canvas style circles
var canvases = document.getElementsByTagName('canvas');
var page2 = document.getElementsByClassName('.dagger')

for( var i=0; i<canvases.length; i++){  
    ctx = canvases[i].getContext('2d');
    var x = canvases[i].width/ 4;
    var y = canvases[i].height / 2;
    var r = 73;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 4 * Math.PI, true);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#00000';
    ctx.stroke();
    ctx.closePath();
    
}

page2.onclick = function(){
    window.location.href="story.html"
};

//resize windows
window.addEventListener(
    'resize',
    () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        renderer.setSize(window.innerWidth, window.innerHeight);
    },
    false
);


// //mouse
// document.addEventListener('mousemove', function (e) {
//     mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
// });


// function showText() {
//     document.getElementById("hiddenTxt");
//     if (XMLDocument.style.display === "none") {
//         XMLDocument.style.display = "block"
//     } else {
//         XMLDocument.style.display = "none"
//     }

// }


// 

// document.body.addEventListener('click', fn, true);



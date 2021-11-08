import * as d3 from 'd3';
import * as THREE from 'three';


let mapContainer = document.getElementById('mapContainer');

//  let mapNode = d3
//     .select('body')
//     //.append('svg')
//     .attr('class', 'map')
//     //.style('width', '500px')
//     //.style('height', '500px')
//     .append('g')
//     .attr('transform', 'translate(0,0) scale(1)');

//canvas 
export var canvas = d3
    .select(mapContainer)
    .append('canvas')
    .attr('id', 'mapCanvas')
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight)

//context rendering
canvas.node().getContext('webgl');

//cam
export var camera = new THREE.PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    0.5,
    5000
);
camera.position.z = 1000;

//mouse
export var mouse = new THREE.Vector2();

//three.js renderer?
export var renderer = new THREE.WebGLRenderer({
    canvas: mapCanvas,
    antialias: true,
});


//resize windows
window.addEventListener(
    'resize',
    () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        renderer.setSize(window.innerWidth, window.innerHeight);
    },
    false
);


//mouse
document.addEventListener('mousemove', function (e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});


import { ShowGlobe } from './modules/globe.js';
ShowGlobe();

import { showTextNode, showOption } from '../modules/ui.js';
showTextNode();
showOption();
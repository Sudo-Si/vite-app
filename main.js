
import './style.css'

import *as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Camera } from 'three';
import { GridHelper } from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);



const geometry = new THREE.BoxGeometry(10,10,10,100);
const material = new THREE.MeshBasicMaterial( {color:0xFF6347, wireframe:true});
const box = new THREE.Mesh(geometry,material);
scene.add(box)
/*
const gridHelper = new THREE.gridHelper(200,50);
scene.add(gridHelper)*/

// const lightHelper = new THREE.PointLightHelper(pointLight)
 const gridHelper = new THREE.GridHelper(200, 50);
 scene.add( gridHelper)

 const controls = new OrbitControls(camera, renderer.domElement);


function animate()
{requestAnimationFrame(animate);

  box.rotation.y += 0.025;
  box.position.z +0.10;
  


renderer.render(scene,camera);
}
animate();
/*
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
*/
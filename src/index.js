import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  //코드실행
  console.log("써니실행", THREE)

  //장면생성
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xBB2649);

  //카메라생성
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const canvas = document.querySelector('#sunny-first');

  //렌더러생성
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  

  function render(time) {
    time *= 0.001;  // convert time to seconds
    // cube.rotation.x = time;
    // cube.rotation.y = time;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);



} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
 
import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  //코드실행
  console.log("써니실행", THREE)

  //장면생성
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xBB2649);

  //카메라생성
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 3;
  // const canvas = document.querySelector('#sunny-first');

  //렌더러생성
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  //메쉬생성
  const geometry01 = new THREE.BoxGeometry(0.3, 0.6, 0.1);
  const material01 = new THREE.MeshStandardMaterial({
    color: 0xAB88ff,
  });
  const obj01 = new THREE.Mesh(geometry01, material01);
  scene.add(obj01);


const geometry02 = new THREE.ConeGeometry(0.3, 0.6, 0.1);
const obj02 = new THREE.Mesh(geometry02, material01);
obj02.position.x = -1;
scene.add(obj02);


const geometry03 = new THREE.IcosahedronGeometry(0.5, 0);
const obj03 = new THREE.Mesh(geometry03, material01);
obj03.position.x = +1;
scene.add(obj03);



  function render(time) {
    time *= 0.001;  // convert time to seconds
    
    obj01.rotation.x = time;
    obj01.rotation.y = time;


    obj02.rotation.x = time;
    obj02.rotation.y = time;

    obj03.rotation.x = time;
    obj03.rotation.y = time;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  function onWindowResize(){
    camera.aspect = window. innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize);



} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
 
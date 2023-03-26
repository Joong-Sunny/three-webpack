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




  //라이트생성
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(0, 2, 12);
  scene.add(pointLight);
  
  //텍스쳐생성
  const textureLoader = new THREE.TextureLoader()
  const textureBaseColor = textureLoader.load('../static/img/brick_wall_04_diff_4k.png');
  const textureNormalMap = textureLoader.load('../static/img/brick_wall_04_nor_dx_4k.png');
  const textureHeightMap = textureLoader.load('../static/img/brick_wall_04_disp_4k.png');
  const textureRoughnessMap = textureLoader.load('../static/img/brick_wall_04_rough_4k.png');





  //메쉬생성
  const geometry01 = new THREE.SphereGeometry(0.4, 0.6, 0.1);
  const material01 = new THREE.MeshStandardMaterial({
    map: textureBaseColor,
  });
  // material01.wireframe = true;
  const obj01 = new THREE.Mesh(geometry01, material01);
  obj01.position.x = -1;
  scene.add(obj01);


const geometry02 = new THREE.SphereGeometry(0.4, 0.6, 0.1);
const material02 = new THREE.MeshStandardMaterial({
  map: textureBaseColor,
  normalMap: textureNormalMap,
});
const obj02 = new THREE.Mesh(geometry02, material02);
scene.add(obj02);


const geometry03 = new THREE.SphereGeometry(0.3, 0.6, 0.1);
const material03 = new THREE.MeshStandardMaterial({
  map: textureBaseColor,
  normalMap: textureNormalMap,
  displacementMap: textureHeightMap,
  displacementScale: 0.2,
});
const obj03 = new THREE.Mesh(geometry03, material03);
obj03.position.x = +1;
scene.add(obj03);


const geometry04 = new THREE.SphereGeometry(0.3, 0.6, 0.1);
const material04 = new THREE.MeshStandardMaterial({
  map: textureBaseColor,
  normalMap: textureNormalMap,
  displacementMap: textureHeightMap,
  displacementScale: 0.2,
  roughnessMap: textureRoughnessMap,
});
const obj04 = new THREE.Mesh(geometry04, material04);
obj04.position.x = +2;
scene.add(obj04);



  function render(time) {
    time *= 0.001;  // convert time to seconds
    
    // obj01.rotation.x = time;
    // obj01.rotation.y = time;


    // obj02.rotation.x = time;
    // obj02.rotation.y = time;

    // obj03.rotation.x = time;
    // obj03.rotation.y = time;

    // obj04.rotation.x = time;
    // obj04.rotation.y = time;

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
 
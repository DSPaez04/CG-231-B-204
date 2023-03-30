var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var lado = 1;
// creacion de un for para las tres figuras
var color = [{color: 0xffffff},{color: 0x00ff00},{color: 0xff0000}]
var mate =[];
var geom =[];
var box=[];
for(i=0;i<3;i++){
geom.push(new THREE.BoxGeometry(lado, lado, lado)); //Creacion del cubo
mate.push(new THREE.MeshPhongMaterial(color[i]));
box.push(new THREE.Mesh(geom[i], mate[i]));
scene.add(box[i]);
}

//traslaciones
geom[0].translate(lado/2,lado/2,lado/2);

geom[1].translate(lado,lado*2.5,lado)
geom[1].scale(lado/2,lado/2,lado/2)

geom[2].translate(lado*2,lado*6.5,lado*2)
geom[2].scale(lado/4,lado/4,lado/4)


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
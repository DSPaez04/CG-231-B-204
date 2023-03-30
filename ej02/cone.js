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



var R = 1;      // la piramide tiene que tener una relacion de 1 y 3 en sus altura y radio
var H = R*3;
var geom = new THREE.ConeGeometry(R, H, 10); //Creacion del cono
var mate = new THREE.MeshPhongMaterial({color:0x00ff00});
var cone = new THREE.Mesh(geom, mate);
scene.add(cone);
cone.position.set(0,0,R+R/2);
geom.rotateX(Math.PI/2);
geom.rotateY(Math.PI/2);               // Transforamcines realizadas para llegar a la posicion final
geom.translate(R+R/2,R,-(R+R/2));
// se hace uso de la funcion de pitagoras para hallar el angulo
geom.rotateZ(-pitagoras(H,R));

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
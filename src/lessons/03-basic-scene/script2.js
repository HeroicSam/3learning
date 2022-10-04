// Scene

const scene = new THREE.Scene();

// Box -> Geometry + Material = Mesh

const geometry = new THREE.BoxGeometry(2, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#ab15e9'});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera

const sizes = {
    width: 1920,
    height: 1080
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;
scene.add(camera);

// Renderer

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
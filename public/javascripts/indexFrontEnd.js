let tag_input = document.getElementById("tag_input");
let submit_button = document.getElementById("submit_button")

/////// setting up the three.js scene into mainCont

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1200 );
camera.position.z = 60;
camera.lookAt(0,0,-1200);

// directionalLight = new THREE.DirectionalLight(0xffffff,100);
// directionalLight.position.set(-50,0,200);
// // directionalLight.castShadow = true;
// scene.add(directionalLight);
light = new THREE.PointLight(0xc4c4c4,10);
light.position.set(0,300,500);
scene.add(light);


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
let cont = document.getElementById('mainCont');
// cont.appendChild( renderer.domElement );
renderer.domElement.style.zIndex = 0;
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = 0;


let sceneCSS = new THREE.Scene();
renderercss = new THREE.CSS3DRenderer();
renderercss.setSize(window.innerWidth, window.innerHeight);
renderercss.domElement.style.position = 'absolute';
renderercss.domElement.style.top = 0;
renderercss.domElement.style.zIndex = 100;
cont.appendChild( renderercss.domElement );
////// put the normal renderer inside the renderecss dom elemet as child. 
////// beware zIndex
// renderercss.domElement.appendChild(renderer.domElement);
cont.appendChild(renderer.domElement);


// var geometry = new THREE.IcosahedronGeometry(7, 2);
// var edges = new THREE.EdgesGeometry( geometry );
// var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x00039c } ) );
// line.position.y = -40;
// line.position.z = -30;
// scene.add( line );


var loader = new THREE.FontLoader();
let mesh3 = loader.load( '../assets/font.json', function ( font ) {

	let geometry = new THREE.TextGeometry( 'BRAWL DATA', {
		font: font,
		size: 8,
		height: 2,
        curveSegments: 2,
		bevelEnabled: false,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
    } );
    let material = new THREE.MeshNormalMaterial();
        
    let mesh2 = new THREE.Mesh(geometry, material);
    // geometry.computeBoundingBox()
    geometry.center();
    mesh2.position.y = -125;
    mesh2.position.z = -120;
    scene.add(mesh2);
} );


let _3Dloader = new THREE.GLTFLoader();
let meshShelly = false
_3Dloader.load('../assets/3Dmodels/scene.gltf', function (gltf) {

    console.log("in the gltf loader");
    gltf.scene.children[0].position.y = -70;
    gltf.scene.children[0].position.z = -60;
    meshShelly = gltf.scene;

    gltf.scene.children[0].scale.set(0.03,0.03,0.03);
    scene.add(gltf.scene);
    // renderer.render(scene, camera);
    // animate()
})

let result = false;

let catMullArray = [
    new THREE.Vector3( 0, 0, 60 ),
    new THREE.Vector3( 0, 0, 20 )
]

for (let i = 0; i < 33; i++) {
    catMullArray.push(new THREE.Vector3( 0, (10 - 20 * (i%2)), - (i+1)*30 ))
}
catMullArray. push(new THREE.Vector3(0,0, -1100));
for (let i = 0; i < 33; i++) {
    catMullArray.push(new THREE.Vector3( 0, (10 - 20 * (i%2)), -960 + (i+1)*30 ))
}
let sampleClosedSpline = new THREE.CatmullRomCurve3( catMullArray, true );
sampleClosedSpline.curveType = "catmullrom";
sampleClosedSpline.tension = 0.2;
let camPosIndex = 0;



function updateCamera(ev) {
    ev.preventDefault();
    camPosIndex = window.scrollY / 12;
    let camPos = sampleClosedSpline.getPoint(camPosIndex / 2000);
    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;
    console.log(camPos.z, camPos.y);

}
window.addEventListener("scroll", updateCamera);

function animate() {
    requestAnimationFrame( animate );
    // camPosIndex++;
    // if (camPosIndex > 5000) {
    //     camPosIndex = 0;
    // }
    // var camPos = sampleClosedSpline.getPoint(camPosIndex / 5000);
    // camera.position.x = camPos.x;
    // camera.position.y = camPos.y;
    // camera.position.z = camPos.z;
    renderercss.render( sceneCSS, camera)
    renderer.render( scene, camera );
    // line.rotation.y += 0.005;
    if (meshShelly) {
        meshShelly.children[0].rotation.z += 0.005;
    }
    
}
animate();



let requestData = async (playerTag) => {
    try {
        const url_final = "http://localhost:3000/usernologin/"

        const playerInfo = await axios({
            method: 'POST',
            url: url_final,
            data: {
                playerTag: playerTag,
                whichKey: "appkeyDCI"
            } 
        })  
        makePlayerContainer(playerInfo.data[0]);

    } catch (error) {
        console.log(error);
    }   
};


submit_button.addEventListener("click",()=>{
    playerTag = tag_input.value;

    console.log(playerTag);

    /////// delete object present in the scene except the first 2 (brawl data and IcosahedronGeometry), might need more for texture and geometry
    while(scene.children.length > 3){ 
            scene.remove(scene.children[3]); 
    }
    while(sceneCSS.children.length > 0){ 
        sceneCSS.remove(sceneCSS.children[0]); 
    }
    requestData(playerTag);

  // request_image(date1);
})

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


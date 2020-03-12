let tag_input = document.getElementById("tag_input");
let submit_button = document.getElementById("submit_button")

/////// setting up the three.js scene into mainCont

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1200 );
camera.position.z = 400;
camera.lookAt(0,0,0);

// control.target = new THREE.Vector3(targetX, targetY, targetZ);


light = new THREE.PointLight(0x444444,10);
light.position.set(0,300,500);
scene.add(light);

light2 = new THREE.PointLight(0x888888,10);
light2.position.set(0, 0, 100);
scene.add(light2);

light3 = new THREE.PointLight(0x888888,10);
light3.position.set(0, 0, - 100);
scene.add(light3);


light4 = new THREE.PointLight(0x888888,10);
light4.position.set(0, 100, 0);
scene.add(light3);

light5 = new THREE.PointLight(0x888888,10);
light5.position.set(0, - 100, 0);
scene.add(light3);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
let cont = document.getElementById('mainCont');
// cont.appendChild( renderer.domElement );
renderer.domElement.style.zIndex = 0;
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = 0;


var geometry = new THREE.IcosahedronGeometry(7, 2);
var edges = new THREE.EdgesGeometry( geometry );
var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x00039c } ) );
line.position.x = 0;
line.position.y = 0;
line.position.z = 0;
scene.add( line );



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
    geometry.center();
    mesh2.position.y = -100;
    mesh2.position.z = 250;
    scene.add(mesh2);
} );


let _3Dloader = new THREE.GLTFLoader();
let meshShelly = false ;
_3Dloader.load('../assets/3Dmodels/scene.gltf', function (gltf) {
    gltf.scene.children[0].position.y = -80;
    gltf.scene.children[0].position.z = 250;
    meshShelly = gltf.scene;
    gltf.scene.children[0].scale.set(0.04,0.04,0.04);
    scene.add(gltf.scene);
})

// let OBJloader = new THREE.OBJLoader();

// let meshModelTest2 = false;
// OBJloader.load(`../assets/3Dmodels/allModels/m16000011.obj`, function (objM) {
    
//     let materialCharacter = new THREE.MeshBasicMaterial( {map : new THREE.TextureLoader().load(`../assets/3Dmodels/allModels/allModels/MORTIS.png`)});
//     materialCharacter.map.wrapS = 1003;
//     materialCharacter.map.wrapT = 1003;

//     meshCharacter = new THREE.Mesh(objM.children[0].geometry, materialCharacter);

//     meshModelTest2 = meshCharacter;
//     meshCharacter.scale.set(0.04,0.04,0.04);
//     meshCharacter.position.y =  -80;
//     meshCharacter.position.z =  250;
    
//     // meshModelTest.push(meshCharacter);

//     scene.add(meshCharacter);
// });


////// with that we set the path of the camera 
let catMullArray = [
    new THREE.Vector3( 0, 0, 400 ),
    new THREE.Vector3( 0, 0, 300 ), 
    new THREE.Vector3( 0, 10, 100 ),
    new THREE.Vector3( 0, 15, 50 )
]

for (let i = 0; i < 50; i++) {
    catMullArray.push(new THREE.Vector3( 35 * Math.sin( 2 * Math.PI * i / 12), 13 - 1.5 * i, 35 * Math.cos( 2 * Math.PI * i / 12)));
}
catMullArray. push(new THREE.Vector3(0,0, 200));
// for (let i = 0; i < 33; i++) {
//     catMullArray.push(new THREE.Vector3( 0, (10 - 20 * (i%2)), -960 + (i+1)*30 ))
// }
let sampleClosedSpline = new THREE.CatmullRomCurve3( catMullArray, true );
sampleClosedSpline.curveType = "catmullrom";
sampleClosedSpline.tension = 0.2;

let y_scroll_position = 0; 
let camPosIndex = 0;

function updateCamera(camPosIndex) {
    let camPos = sampleClosedSpline.getPoint(camPosIndex / 2000);
    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;
    console.log(camPos.z, camPos.y);
    camera.lookAt(0, camPos.y ,0);

}
//// bellow is the scroll function that will feed/define the 
//// camposIndex of the updateCamera function inside the requestAnimationFrame Loop of animate function 

window.addEventListener("scroll", scroll);
function scroll () {
    // ev.preventDefault();
    y_scroll_position = window.scrollY/6
}

////// array in which the models of characters are stored, 
////// passed into the makeplayercont function
////// use : make rotations
let meshModelTest = [] ;


function animate() {
    requestAnimationFrame( animate );
    renderercss.render( sceneCSS, camera)
    renderer.render( scene, camera );
    //// once the 3d model is loaded make it rotate
    if (meshShelly) {
        meshShelly.children[0].rotation.z += 0.02;
    }   
    meshModelTest.forEach((el, index) => {
        el.rotation.y+= 0.02 * (index%2 - 0.5) 
    })
    // if (meshModelTest2) {
    //     meshModelTest2.rotation.y+= 0.02
    // }

    ///// this part is to create inertia with the scrolling
    ///// y_scroll_position is updated through scroll callback function 
    camPosIndex = 0.96 * camPosIndex + 0.04 * y_scroll_position;
    camPosIndex = Math.floor(camPosIndex * 100) /100;
    updateCamera(camPosIndex); 

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
        makePlayerContainer(playerInfo.data[0], meshModelTest);
    } catch (error) {
        console.log(error);
    }   
};


submit_button.addEventListener("click",()=>{
    playerTag = tag_input.value;

    console.log(playerTag);

    /////// delete object present in the scene except the first 2 (brawl data and IcosahedronGeometry), might need more for texture and geometry
    while(scene.children.length > 8){ 
            scene.remove(scene.children[8]); 
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


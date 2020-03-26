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
renderer.domElement.style.zIndex = 10;
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = 0;


var geometry = new THREE.IcosahedronGeometry(7, 2);
var edges = new THREE.EdgesGeometry( geometry );
var lineEdge = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x00039c } ) );
lineEdge.position.x = -300;
lineEdge.position.y = 0;
lineEdge.position.z = -300;
scene.add( lineEdge );

///// for test purpose on second path with second location
var geometry2 = new THREE.IcosahedronGeometry(7, 2);
var edges2 = new THREE.EdgesGeometry( geometry );
var lineEdge2= new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0xaa039c } ) );
lineEdge2.position.x = 300;
lineEdge2.position.y = 0;
lineEdge2.position.z = -300;
scene.add( lineEdge2 );



let sceneCSS = new THREE.Scene();
renderercss = new THREE.CSS3DRenderer();
renderercss.setSize(window.innerWidth, window.innerHeight);
renderercss.domElement.style.position = 'absolute';
renderercss.domElement.style.top = 0;
renderercss.domElement.style.zIndex = 11;
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
let catMullArray1 = [
    new THREE.Vector3( 0, 0, 400 ),
    new THREE.Vector3( 0, 0, 200 ), 
    new THREE.Vector3( -150, 10, 1 ),
    new THREE.Vector3( -300, 15, 1 ),
    new THREE.Vector3( -300, 15, -100 ),
    new THREE.Vector3( -300, 15, -200 )
]
for (let i = 0; i < 200; i++) {
    catMullArray1.push(new THREE.Vector3( -300 + 35 * Math.sin( 2 * Math.PI * i / 50), 13 - 0.36 * i, -300 + 35 * Math.cos( 2 * Math.PI * i / 50)));
}
catMullArray1. push(new THREE.Vector3( -200, 15, -100 )); 
catMullArray1. push(new THREE.Vector3(-100, 10, 0));
catMullArray1. push(new THREE.Vector3(0,0, 200));
catMullArray1. push(new THREE.Vector3(0,0, 400));



let sampleClosedSpline1 = new THREE.CatmullRomCurve3( catMullArray1, true );
sampleClosedSpline1.curveType = "catmullrom";
sampleClosedSpline1.tension = 0.5;

////// create a second path for the camera with second catmullarray 
let catMullArray2 = [
    new THREE.Vector3( 0, 0, 400 ),
    new THREE.Vector3( 50, 0, 350 ), 
    new THREE.Vector3( 100, 0, 200 ), 
    new THREE.Vector3( 200, -20, 50 ),
    new THREE.Vector3( 300, -20, 0 ),
    new THREE.Vector3( 300, -20, -20 )
]
for (let i = 0; i < 50; i++) {
    catMullArray2.push(new THREE.Vector3( 300 + 210 * Math.sin( Math.PI * i / 25), -20, -300 + 210 * Math.cos( Math.PI * i / 25)));
}
// for (let i = 0; i < 24; i++) {
//     catMullArray2.push(new THREE.Vector3( 200, - 90 * Math.sin(i * Math.PI / (25 * 2)), 90 * Math.cos(i* Math.PI / (25 * 2))));
// }
catMullArray2.push(new THREE.Vector3( 300,  0, -50));
catMullArray2.push(new THREE.Vector3( 200,  0, 0));
catMullArray2.push(new THREE.Vector3( 200,  0, ));
catMullArray2.push(new THREE.Vector3( 50,  0, 350));




let sampleClosedSpline2 = new THREE.CatmullRomCurve3( catMullArray2, true );
sampleClosedSpline2.curveType = "catmullrom";
sampleClosedSpline2.tension = 0.5;

//// initialize the path with first catMullArray
//// we will change path value with the click event in the menu 
let pathVal = sampleClosedSpline1;
let indexPath = 1;

let y_scroll_position = 0; 
let camPosIndex = 0;

function updateCamera(camPosIndex, path, indexPath) {
    let camPos = path.getPoint(camPosIndex / 2000);
    let camLookAt = path.getPoint((camPosIndex + 10)/2000)

    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;
    if (indexPath === 1 && camPos.z > 200) {
        camera.lookAt(camLookAt.x, camPos.y ,camLookAt.z);
        renderercss.domElement.style.zIndex = 11;
    }
    if (indexPath === 1 && camPos.z <= 200 && camPos.z > -150) {
        camera.lookAt(camLookAt.x, camPos.y , camLookAt.z);
        renderercss.domElement.style.zIndex = 9;
    }
    if (indexPath === 1 && camPos.z <= - 150) {
        camera.lookAt(-300, camPos.y , -300);
        renderercss.domElement.style.zIndex = 9;
    }
    else if (indexPath === 2) {
        camera.lookAt(300, 30 , -300);
        renderercss.domElement.style.zIndex = 11;
    }
    
}
//// bellow is the scroll function that will feed/define the 
//// camposIndex of the updateCamera function inside the requestAnimationFrame Loop of animate function 

window.addEventListener("scroll", scroll);
function scroll () {
    y_scroll_position = window.scrollY/3
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
        /// handle the special case of character shelly: rotation's behaviour is different.
        if (el.name === "RootNode_(gltf_orientation_matrix)") {
            el.rotation.z += 0.02 * (index%2 - 0.5); 
        }
        else {
            el.rotation.y+= 0.02 * (index%2 - 0.5);
        }
        

    })

    ///// this part is to create inertia with the scrolling
    ///// y_scroll_position is updated through scroll callback function 
    camPosIndex = 0.92 * camPosIndex + 0.08 * y_scroll_position;
    camPosIndex = Math.floor(camPosIndex * 1000) /1000;
    updateCamera(camPosIndex, pathVal, indexPath); 
}
animate();


let requestData = async (playerTag) => {
    try {
        // const url_final = "http://localhost:3000/usernologin/"
        const url_final = "http://localhost:3000/usernologinoffline/"

        const playerInfo = await axios({
            method: 'POST',
            url: url_final,
            data: {
                playerTag: playerTag,
                // whichKey: "appkeyDCI"
                whichKey: "appkeyHome"

            } 
        })  
        
        makePlayerContainer(playerInfo.data[0], meshModelTest);
        console.log(playerInfo.data[1]);
        makeBattleSection(playerInfo.data[1]);
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

let callPlayerInfo = (tag) => {
    console.log(playerTag);

    /////// delete object present in the scene except the first 2 (brawl data and IcosahedronGeometry), might need more for texture and geometry
    while(scene.children.length > 8){ 
            scene.remove(scene.children[8]); 
    }
    while(sceneCSS.children.length > 0){ 
        sceneCSS.remove(sceneCSS.children[0]); 
    }
    requestData(tag);
    goback();
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    indexPath = 1;
}


////// that part is for the navigation menu and the related burger 
document.getElementById("back").addEventListener("click", goback);
document.getElementById("link1").addEventListener("click", goto);
document.getElementById("link2").addEventListener("click", goto2);
document.getElementById("link4").addEventListener("click", transform);

function goback () {
    pathVal = sampleClosedSpline1;
    indexPath = 1;
    window.scrollTo(0,0)
}
function goto () {
    pathVal = sampleClosedSpline1;
    indexPath = 1;
    window.scrollTo(0,250)
}
function goto2 () {
    pathVal = sampleClosedSpline2;
    indexPath = 2;
    window.scrollTo(0,550)
}

let burger = document.getElementById("burger");
burger.addEventListener("click", transform)
function transform () {
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let line3 = document.getElementById("line3");
    let line4 = document.getElementById("line4");
    let line12 = document.getElementById("line12");
    let line22 = document.getElementById("line22");
    let line32 = document.getElementById("line32");
    let line42 = document.getElementById("line42");
    line1.classList.toggle("toggleline1");
    line2.classList.toggle("toggleline2");
    line3.classList.toggle("toggleline3");
    line4.classList.toggle("toggleline4");
    line12.classList.toggle("toggleline12");
    line22.classList.toggle("toggleline22");
    line32.classList.toggle("toggleline32");
    line42.classList.toggle("toggleline42");

    //// make the menu comes from the right.
    let menu = document.getElementById("menu");
    menu.classList.toggle("toggleMenuPosition");
}
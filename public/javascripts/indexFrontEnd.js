let tag_input = document.getElementById("tag_input");
let submit_button = document.getElementById("submit_button")

/////// setting up the three.js scene into mainCont

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1200 );
camera.position.z = 60;
camera.lookAt(0,0,-1200);
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
let cont = document.getElementById('mainCont');
cont.appendChild( renderer.domElement );


var geometry = new THREE.IcosahedronGeometry(7, 2);
// var material = new THREE.MeshLambertMaterial( { color: 0x5029ff } );
var edges = new THREE.EdgesGeometry( geometry );
var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x00039c } ) );
line.position.y = -40;
line.position.z = -30;
scene.add( line );


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
    mesh2.position.y = -110;
    mesh2.position.z = -120;
    scene.add(mesh2);
} );

let catMullArray = [
    new THREE.Vector3( 0, 0, 60 ),
    new THREE.Vector3( 0, 0, 20 )
]

for (let i = 0; i < 33; i++) {
    catMullArray.push(new THREE.Vector3( 0, (10 - 20 * (i%2)), - (i+1)*30 ))
}
for (let i = 0; i < 33; i++) {
    catMullArray.push(new THREE.Vector3( 0, (10 - 20 * (i%2)), -960 + (i+1)*30 ))
}

// catMullArray.push(new THREE.Vector3( 0, 0, -1000 ));

console.log(catMullArray);

let sampleClosedSpline = new THREE.CatmullRomCurve3( catMullArray, true );


sampleClosedSpline.curveType = "catmullrom";
sampleClosedSpline.tension = 0.2;

let camPosIndex = 0;



function updateCamera(ev) {
    ev.preventDefault();
    camPosIndex = window.scrollY / 6;
    let camPos = sampleClosedSpline.getPoint(camPosIndex / 2000);
    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;
    console.log(camPos.z, camPos.y);

}
window.addEventListener("scroll", updateCamera);


/////// scroll event to go along the z-index 

// function updateCamera(ev) {
//     ev.preventDefault();
//     camera.position.z = 60 - window.scrollY / 2;
//     console.log("scrollin ...")
// }
// window.addEventListener("scroll", updateCamera);




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

    renderer.render( scene, camera );
    line.rotation.y += 0.005;
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
        // console.log("***************-------------------*****************")
        makePlayerContainer(playerInfo.data[0]);
        // return playerInfo.data

    } catch (error) {
        console.log(error);
    }   
};


submit_button.addEventListener("click",()=>{
  playerTag = tag_input.value;

  console.log(playerTag);
  requestData(playerTag);

  // request_image(date1);
})



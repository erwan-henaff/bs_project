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


var geometry = new THREE.IcosahedronGeometry(6, 2);
// var material = new THREE.MeshLambertMaterial( { color: 0x5029ff } );
var edges = new THREE.EdgesGeometry( geometry );
var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );


var loader = new THREE.FontLoader();


let mesh3 = loader.load( '../assets/font.json', function ( font ) {

	let geometry = new THREE.TextGeometry( 'BRAWL DATA', {
		font: font,
		size: 6,
		height: 3,
        curveSegments: 2,
		bevelEnabled: false,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
    } );
    let material = new THREE.MeshNormalMaterial();
        
    let mesh2 = new THREE.Mesh(geometry, material);
    mesh2.position.x = -30;
    mesh2.position.y = -60;
    mesh2.position.z = -100;
    scene.add(mesh2);
} );

var sampleClosedSpline = new THREE.CatmullRomCurve3( [
    new THREE.Vector3( 0, 0, 60 ),
    new THREE.Vector3( 0, 0, -900)
], true );

sampleClosedSpline.curveType = "catmullrom";
sampleClosedSpline.tension = 0.6;

var camPosIndex = 0;

function updateCamera(ev) {
    // ev.preventDefault();
    camera.position.z = 60 - window.scrollY / 5;
    console.log("scrollin ...")
}
renderer.domElement.addEventListener("scroll", updateCamera);


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



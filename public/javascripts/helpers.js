let playerInfoCont = document.getElementById("playerInfoCont");




const makePlayerContainer = (data) => {

    console.log(data);


    let loader = new THREE.FontLoader();

    // let mesh = loader.load( '../assets/font.json', function ( font ) {
    loader.load( '../assets/font.json', function ( font ) {


        let geometry = new THREE.TextGeometry( `
${data.name}
tag : ${data.tag}
trophies : ${data.trophies[data.trophies.length -1].trophies}
highest trophies : ${data.highestTrophies[data.highestTrophies.length -1].highestTrophies}
Experience Level : ${data.expLevel}
3vs3 Victories : ${data["3vs3Victories"][data["3vs3Victories"].length -1]["3vs3Victories"]}
solo Victories : ${data.soloVictories[data.soloVictories.length -1].soloVictories}
duo Victories : ${data.duoVictories[data.duoVictories.length -1].duoVictories}
Power Play Points : ${data.powerPlayPoints? data.powerPlayPoints : 0}
Highest Power Play Points : ${data.highestPowerPlayPoints? data.highestPowerPlayPoints : 0}
Best time at Robo Rumble : ${(data.bestRoboRumbleTime - data.bestRoboRumbleTime%60)/60}m${data.bestRoboRumbleTime%60}s
Best time as Big Brawler : ${(data.bestTimeAsBigBrawler-data.bestTimeAsBigBrawler%60)/60}m${data.bestTimeAsBigBrawler%60}s


        `, {
            font: font,
            size: 1,
            height: 0.2,
            curveSegments: 2,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
        } );

        geometry.center();

        let material = new THREE.MeshNormalMaterial();
            
        let mesh2 = new THREE.Mesh(geometry, material);
        // mesh2.position.x = -10;

        mesh2.position.y = 0;
        mesh2.position.z = 20;
        scene.add(mesh2);
    } );

    ///// handles the text for each brawlers 

    for (let i = 0; i < data.brawlers.length; i++) {
        makeBrawlerText(data.brawlers[i], i);
        
    }

} 

const makeBrawlerText = (data, distance) => {

    let loader = new THREE.FontLoader();

    let mesh = loader.load( '../assets/font.json', function ( font ) {

        let geometry = new THREE.TextGeometry( `
${data.name}
Power : ${data.power}
Rank : ${data.rank}
Trophies : ${data.trophies[data.trophies.length -1].trophies}
Highest Trophies : ${data.highestTrophies}
`           , {
            font: font,
            size: 0.5,
            height: 0.2,
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
        mesh2.position.y = -4 + 10 - 20 * (distance%2);
        mesh2.position.z = -40 - distance * 30;
        scene.add(mesh2);

        let geometryCube = new THREE.BoxGeometry( 5, 7, 1 );
        let edges = new THREE.EdgesGeometry( geometryCube );
        let lineCube = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x00039c } ) );


        let texture = new THREE.TextureLoader().load(`../assets/brawler-models/${data.id}.png`)
        /// create a material in 6 dimension 
        var materialProj2 = 
        [
            null, 
            null, 
            null,
            null, 
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(`../assets/brawler-models/${data.id}.png`)}), // FRONT SIDE
            null 
        ];
        ////// use the 6th dimension material and project the texture on the front side of the cube 5th value of the material array
        let cube = new THREE.Mesh(geometryCube, materialProj2);
        ////// + 6.5 is to get the cube above the text, -4 to get the cube and text lower for the camera.
        ////// 10 - 20 * distance%2 is there to create a zig zag pattern
        lineCube.position.y = -4 + 6.5 + 10 - 20 * (distance%2);
        lineCube.position.z = -40 - distance * 30;

        cube.position.y = -4 + 6.5 + 10 - 20 * (distance%2);
        cube.position.z = -40 - distance * 30;

        scene.add( lineCube );
        scene.add( cube );

    } );

}

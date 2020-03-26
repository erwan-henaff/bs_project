let playerInfoCont = document.getElementById("playerInfoCont");

const makePlayerContainer = (data, meshModelTest) => {

    console.log(data);

    var divNamePlayer = document.createElement('div');
    divNamePlayer.innerHTML = `${data.name}`;
    divNamePlayer.style.color = "rgb(255, 255, 150)";
    divNamePlayer.style.fontSize = "2px";
    divNamePlayer.style.padding = "1px";


    var cssObject = new THREE.CSS3DObject(divNamePlayer);
    cssObject.position.x = 0;
    cssObject.position.y = 11;
    cssObject.position.z = 350;

    sceneCSS.add(cssObject);


    let loader = new THREE.FontLoader();
    // let mesh = loader.load( '../assets/font.json', function ( font ) {
    loader.load( '../assets/font.json', function ( font ) {

        let geometry = new THREE.TextGeometry( `
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
            height: 0.1,
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
        mesh2.position.z = 350;
        scene.add(mesh2);
    } );

    ///// handles the text for each brawlers 

    for (let i = 0; i < data.brawlers.length; i++) {
        makeBrawlerSection(data.brawlers[i], i, meshModelTest);
        
    }

} 

////  meshModelTest = [] defined in indexFrontEnd file ;

const makeBrawlerSection = (data, distance, meshModelTest) => {

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
            height: 0.1,
            curveSegments: 3,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
        } );
        let material = new THREE.MeshBasicMaterial({color: 0x0081d6});    
        let mesh2 = new THREE.Mesh(geometry, material);
        geometry.center();
        // mesh2.position.y = -4 + 10 - 20 * (distance%2);
        // mesh2.position.z = -40 - distance * 30;

        mesh2.position.y = 10 - 1.5 * (distance) ;
        mesh2.position.z =  -300 + 20 * Math.cos( 2 * Math.PI * distance / 12);
        mesh2.position.x =  -300 + 20 * Math.sin( 2 * Math.PI * distance / 12);
        mesh2.rotation.y = distance * Math.PI / 6;


        scene.add(mesh2);
    });

    if (data.name === "NITA" || data.name === "BULL" || data.name === "BARLEY" || data.name === "RICO" || data.name === "BROCK" || data.name === "SPIKE" || data.name === "CARL" || data.name === "DYNAMIKE" || data.name === "MORTIS" || data.name === "GENE" || data.name === "LEON" || data.name === "TARA" || data.name === "POCO") {
        let OBJloader = new THREE.OBJLoader();

        OBJloader.load(`../assets/3Dmodels/allModels/m${data.id}.obj`, function (objM) {
            
            let materialCharacter = new THREE.MeshBasicMaterial( {map : new THREE.TextureLoader().load(`../assets/3Dmodels/allModels/allModels/${data.name}.png`)});
            materialCharacter.map.wrapS = 1003;
            materialCharacter.map.wrapT = 1003;

            let meshCharacter = new THREE.Mesh(objM.children[0].geometry, materialCharacter);

            // meshModelTest = meshTest;
            meshCharacter.scale.set(0.005,0.005,0.005);
            meshCharacter.position.y =  13 - 1.5 * (distance);
            meshCharacter.position.z =  -300 + 20 * Math.cos( 2 * Math.PI * distance / 12);
            meshCharacter.position.x =  -300 + 20 * Math.sin( 2 * Math.PI * distance / 12);
            meshCharacter.rotation.y = distance * Math.PI / 6;
            
            meshModelTest.push(meshCharacter);

            scene.add(meshCharacter);
        });
    }
    else if (data.name === "SHELLY") {
        let _3Dloader = new THREE.GLTFLoader();
        // let meshShelly = false ;
        _3Dloader.load('../assets/3Dmodels/scene.gltf', function (gltfShelly) {
            gltfShelly.scene.children[0].scale.set(0.005,0.005,0.005);
            gltfShelly.scene.children[0].position.y = 13 - 1.5 * (distance);
            gltfShelly.scene.children[0].position.z = -300 + 20 * Math.cos( 2 * Math.PI * distance / 12);
            gltfShelly.scene.children[0].position.x =  -300+ 20 * Math.sin( 2 * Math.PI * distance / 12);
            gltfShelly.scene.children[0].rotation.y = distance * Math.PI / 6;
            meshModelTest.push(gltfShelly.scene.children[0]);

            // meshShelly = gltf.scene;
            scene.add(gltfShelly.scene);
        })
    }

    else {
        let geometryCube = new THREE.BoxGeometry( 5, 7, 2 );
        let edges = new THREE.EdgesGeometry( geometryCube );
        let lineCube = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x00039c } ) );

        let materialProj2 = 
        [
            new THREE.MeshBasicMaterial({ color: 0x00039c, opacity: 0.5, transparent: true }), 
            new THREE.MeshBasicMaterial({ color: 0x00039c, opacity: 0.5, transparent: true }), 
            new THREE.MeshBasicMaterial({ color: 0x00039c, opacity: 0.5, transparent: true }),
            new THREE.MeshBasicMaterial({ color: 0x00039c, opacity: 0.5, transparent: true }), 
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(`../assets/brawler-models/${data.id}.png`)}), // FRONT SIDE
            new THREE.MeshBasicMaterial({ color: 0x00039c, opacity: 0.5, transparent: true }) 
        ];
        ////// use the 6th dimension material and project the texture on the front side of the cube 5th value of the material array
        let cube = new THREE.Mesh(geometryCube, materialProj2);
        ////// + 6.5 is to get the cube above the text, -4 to get the cube and text lower for the camera.
        ////// 10 - 20 * distance%2 is there to create a zig zag pattern
        lineCube.position.y = 6.5 + 10 - 1.5  * (distance);
        lineCube.position.z =  -300 + 20 * Math.cos( 2 * Math.PI * distance / 12);
        lineCube.position.x =  -300 + 20 * Math.sin( 2 * Math.PI * distance / 12);
        lineCube.rotation.y =  distance * Math.PI / 6;

        cube.position.y = 6.5 + 10 - 1.5 * (distance);
        cube.position.z =  -300 + 20 * Math.cos( 2 * Math.PI * distance / 12);
        cube.position.x =  -300 + 20 * Math.sin( 2 * Math.PI * distance / 12);
        cube.rotation.y = distance * Math.PI / 6;

        // scene.add( lineCube );
        scene.add( cube );
    }
};

const makeBattleSection = (data) => {
    for (let i = 0; i < data.length; i++) {
        let divBattle = document.createElement('div');
        divBattle.classList.add("divBattleClass");
        
        divBattle.innerHTML = `
        ${data[i].event.mode} <br> ${data[i].event.map}
        ${data[i].battle.result? data[i].battle.result : `rank: ${data[i].battle.rank}`}`;
        
        
        if (data[i].battle.teams) {
            data[i].battle.teams.forEach(el => {
                let divBattleTeamPlayer = document.createElement('div');
                divBattleTeamPlayer.classList.add("divBattleTeamPlayerClass");

                el.forEach(el => {
                
                    let divPlayer = document.createElement('div');
                    divPlayer.classList.add("playerClass");
    
                    divPlayer.setAttribute("id", el.tag )
                    divPlayer.innerHTML += `
                        ${el.name}
                        <br>brawler:${el.brawler.name}, trophies:${el.brawler.trophies}, power: ${el.brawler.power}
                    `
                    divBattleTeamPlayer.appendChild(divPlayer);
                    divPlayer.addEventListener("click", (event)=> {
                            callPlayerInfo(event.target.id.slice(1));
                    });
                });
                divBattle.appendChild(divBattleTeamPlayer);
            })
        }
        else if (data[i].battle.players) {
            let divBattleTeamPlayer = document.createElement('div');
            divBattleTeamPlayer.classList.add("divBattleTeamPlayerClass");
            data[i].battle.players.forEach(el=> {
                let divPlayer = document.createElement('div');
                divPlayer.classList.add("playerClass");

                divPlayer.setAttribute("id", el.tag )
                divPlayer.innerHTML += `
                    ${el.name}
                    <br>brawler:${el.brawler.name}, trophies:${el.brawler.trophies}, power: ${el.brawler.power}
                `
                divBattleTeamPlayer.appendChild(divPlayer);
                divPlayer.addEventListener("click", (event)=> {
                        callPlayerInfo(event.target.id.slice(1));
                })
            })
            divBattle.appendChild(divBattleTeamPlayer);
        }

        let cssObject = new THREE.CSS3DObject(divBattle);
        cssObject.position.x = 300 + 150 * Math.sin( 2 * i * Math.PI / 25) ;
        cssObject.position.y = 0 ;
        cssObject.position.z = -300 + 150 * Math.cos( 2 * i * Math.PI / 25); 
        cssObject.rotation.y = 2 * i * Math.PI / 25
    
        sceneCSS.add(cssObject);    
    }
}




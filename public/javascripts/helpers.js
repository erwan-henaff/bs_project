let playerInfoCont = document.getElementById("playerInfoCont");




const makePlayerContainer = (data) => {

    console.log(data);


    let loader = new THREE.FontLoader();

    let mesh = loader.load( '../assets/font.json', function ( font ) {

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
        let material = new THREE.MeshNormalMaterial();
            
        let mesh2 = new THREE.Mesh(geometry, material);
        mesh2.position.x = -10;
        mesh2.position.y = 10;
        mesh2.position.z = 20;
        scene.add(mesh2);
    } );

    ///// handles the text for each brawlers 

    for (let i = 0; i < data.brawlers.length; i++) {
        makeBrawlerText(data.brawlers[i], i);
        
    }


    // playerInfoCont.innerHTML = "";

    // let nameDiv = document.createElement("div");
    // nameDiv.classList.add("nameDiv");
    // nameDiv.innerText = `Name : ${data.name}`;

    // let tagDiv = document.createElement("div");
    // tagDiv.classList.add("tagDiv");
    // tagDiv.innerText = `Tag : ${data.tag}`;


    // let trophiesDiv = document.createElement("div");
    // trophiesDiv.classList.add("trophiesDiv");
    // trophiesDiv.innerText = `Trophies : ${data.trophies[data.trophies.length -1].trophies}`;

    // let highestTrophiesDiv = document.createElement("div");
    // highestTrophiesDiv.classList.add("highestTrophiesDiv");
    // highestTrophiesDiv.innerText = `Highest trophies : ${data.highestTrophies[data.highestTrophies.length -1].highestTrophies}`;

    // let expLevelDiv = document.createElement("div");
    // expLevelDiv.classList.add("expLevelDiv");
    // expLevelDiv.innerText = `Experience Level : ${data.expLevel}`;

    // let _3vs3Div = document.createElement("div");
    // _3vs3Div.classList.add("_3vs3Div");
    // _3vs3Div.innerText = `3vs3 Victories : ${data["3vs3Victories"][data["3vs3Victories"].length -1]["3vs3Victories"]}`;

    // let soloDiv = document.createElement("div");
    // soloDiv.classList.add("soloDiv");
    // soloDiv.innerText = `solo Victories : ${data.soloVictories[data.soloVictories.length -1].soloVictories}`;

    // let duoDiv = document.createElement("div");
    // duoDiv.classList.add("duoDiv");
    // duoDiv.innerText = `duo Victories : ${data.duoVictories[data.duoVictories.length -1].duoVictories}`;

    // let powerPlayDiv = document.createElement("div");
    // powerPlayDiv.classList.add("powerPlayDiv");
    // powerPlayDiv.innerText = `Power Play Points : ${data.powerPlayPoints}`;

    // let powerPlayHighDiv = document.createElement("div");
    // powerPlayHighDiv.classList.add("powerPlayHighDiv");
    // powerPlayHighDiv.innerText = `Highest Power Play Points : ${data.highestPowerPlayPoints}`;

    // let bestRoboRumbleTimeDiv = document.createElement("div");
    // bestRoboRumbleTimeDiv.classList.add("bestRoboRumbleTimeDiv");
    // bestRoboRumbleTimeDiv.innerText = `Best time at Robo Rumble : ${(data.bestRoboRumbleTime - data.bestRoboRumbleTime%60)/60}m${data.bestRoboRumbleTime%60}s`;
    
    // let bestTimeAsBigBrawlerDiv = document.createElement("div");
    // bestTimeAsBigBrawlerDiv.classList.add("bestTimeAsBigBrawlerDiv");
    // bestTimeAsBigBrawlerDiv.innerText = `Best time as Big Brawler : ${(data.bestTimeAsBigBrawler-data.bestTimeAsBigBrawler%60)/60}m${data.bestTimeAsBigBrawler%60}s`;

    // let brawlersDiv = document.createElement("div");
    // brawlersDiv.classList.add("brawlersDiv");
    // brawlersDiv.innerHTML = "<h3>Brawlers</h1>"

    // for (let i = 0; i < data.brawlers.length; i++) {
    //     let BrawlerDiv = makeBrawlerCont(data.brawlers[i]);
    //     brawlersDiv.appendChild(BrawlerDiv);
    // }


    // playerInfoCont.appendChild(nameDiv);
    // playerInfoCont.appendChild(tagDiv);
    // playerInfoCont.appendChild(trophiesDiv);
    // playerInfoCont.appendChild(highestTrophiesDiv);
    // playerInfoCont.appendChild(_3vs3Div);
    // playerInfoCont.appendChild(expLevelDiv);
    // playerInfoCont.appendChild(soloDiv);
    // playerInfoCont.appendChild(powerPlayDiv);
    // playerInfoCont.appendChild(duoDiv);
    // playerInfoCont.appendChild(powerPlayHighDiv);
    // playerInfoCont.appendChild(bestRoboRumbleTimeDiv);
    // playerInfoCont.appendChild(bestTimeAsBigBrawlerDiv);
    // playerInfoCont.appendChild(brawlersDiv);

} 

const makeBrawlerCont = (data) => {

    let brawlerDiv = document.createElement("div");
    brawlerDiv.classList.add(`brawlerDiv`, `brawlerDiv${data.id}`);
    let urlPicture = `../assets/brawler-models/${data.id}.png`;
    console.log(urlPicture);
    brawlerDiv.innerHTML = `${data.name}<br>Power : ${data.power}<br>Rank : ${data.rank}<br>Trophies : ${data.trophies[data.trophies.length -1].trophies} <br>Highest Trophies : ${data.highestTrophies}<img src ="${urlPicture}" alt="picture" width="100%">`;

    return brawlerDiv;
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
            size: 1,
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
        mesh2.position.x = -10;
        mesh2.position.y = 10 - 20 * (distance%2);
        mesh2.position.z = 20 - distance * 30;
        scene.add(mesh2);
    } );

}

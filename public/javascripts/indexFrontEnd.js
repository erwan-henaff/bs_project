// import { makePlayerContainer }  from './helpers'



let tag_input = document.getElementById("tag_input");

let submit_button = document.getElementById("submit_button")



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



let result_container = document.getElementById("resultcontainer")
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
        console.log("***************-------------------*****************")
        console.log(playerInfo.data[0]);
        console.log(playerInfo.data[1]);

    } catch (error) {
        next(error)
    }   
};


submit_button.addEventListener("click",()=>{
  playerTag = tag_input.value;

  console.log(playerTag);
  requestData(playerTag);

  // request_image(date1);
})



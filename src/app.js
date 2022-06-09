alert("Website under developpement, Embed system don't work")
/*
const WebhookLinkInput = document.querySelector("#WebhookLinkInput")
WebhookLinkInput.addEventListener('input', function () {
    const regex = /https?:\/\/(ptb\.)?(canary\.)?discord\.com\/api\/webhooks\/[0-9]+\/[A-Za-z0-9_]+/gm

    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('https?:\\/\\/(ptb\\.)?discord\\.com\\/api\\/webhooks\\/[0-9]+\\/[A-Za-z0-9_]+', 'gm')

    const str = WebhookLinkInput.value;
    let m;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
    }
});*/


/*
let variable
fetch('https://ptb.discord.com/api/webhooks/981910278977515560/pHNojKrKTN3up54iyUFomwYo-2WTSHQ-DGbSRNV_nzsC5bBGuVy-Omx1nFYiujJ_WqBs').then(function(response) {
    return response.json();
}).then(function(data){
    console.log(data);
    variable = data
    console.log("WebHook avatar = https://cdn.discordapp.com/avatars/"+variable.id+"/"+variable.avatar+".jpg")
})*/

const webTestUrl = 'https://discord.com/api/webhooks/981910278977515560/pHNojKrKTN3up54iyUFomwYo-2WTSHQ-DGbSRNV_nzsC5bBGuVy-Omx1nFYiujJ_WqBs'

function GEID(id){
    return document.getElementById(id)
}

function sendHook(){
    let WebhookTextInput = document.getElementById("WebhookTextInput").value
    let url = document.getElementById("WebhookLinkInput").value
    let customWhProfilCheck = document.getElementById("CustomWhProfilCheck")
    if (customWhProfilCheck.classList.contains("checked")) {
        var dataJson = {
            "content": WebhookTextInput
        }
        let WhUsername = document.getElementById("WhNameInput").value //                    Nom du webhook
        let WhPpUrlInput = document.getElementById("WhPpUrlInput").value//                  PP du webhook
        if(WhUsername != "" | WhUsername != " "){dataJson.username = WhUsername}
        if(WhPpUrlInput != "" | WhPpUrlInput != " "){dataJson.avatar_url = WhPpUrlInput}
        var data = JSON.stringify(dataJson);
    }else{
        var data = JSON.stringify({
            "content": WebhookTextInput
        });
    }
    xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	
    console.log(data)
	xhr.send(data);
	xhr.onreadystatechange = function() {
		if(this.status != 200){
			console.log(this.responseText);
		}
	}
    alert("send")
}


function tgl1() {
    let WhProfilchek = document.getElementById("CustomWhProfilCheck")
    let WhProfilMenu = document.getElementById("customWhProfil")
    WhProfilchek.classList.toggle("checked")
    WhProfilMenu.classList.toggle("show")
}


function revealEmb(nb) {
    let content = document.getElementById(`WhEmbUi${nb}`)
    content.classList.toggle("active")
}
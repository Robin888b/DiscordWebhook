
const loadItem = async () => {
    
}


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


function sendHook(){
    let WebhookTextInput = document.getElementById("WebhookTextInput").value
    let url = document.getElementById("WebhookLinkInput").value
    xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	var data = JSON.stringify({
        "content": WebhookTextInput,
        "username": "username",
        "avatar_url": "https://i.imgur.com/AfFp7pu.png",
    });
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

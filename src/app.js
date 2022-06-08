function get(id){
	return document.getElementById(id).value
}
function getC(id){
	return document.getElementById(id).checked
}



let variable
fetch('https://ptb.discord.com/api/webhooks/981910278977515560/pHNojKrKTN3up54iyUFomwYo-2WTSHQ-DGbSRNV_nzsC5bBGuVy-Omx1nFYiujJ_WqBs').then(function(response) {
    return response.json();
}).then(function(data){
    console.log(data);
    variable = data
    console.log("WebHook avatar = https://cdn.discordapp.com/avatars/"+variable.id+"/"+variable.avatar+".jpg")
})

const webtesturl = 'https://discord.com/api/webhooks/981910278977515560/pHNojKrKTN3up54iyUFomwYo-2WTSHQ-DGbSRNV_nzsC5bBGuVy-Omx1nFYiujJ_WqBs/'

function sendHook(){
    url = webtesturl
    jsonMsg = msg
	xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	var data = JSON.stringify(jsonMsg);
	xhr.send(data);
	xhr.onreadystatechange = function() {
		if(this.status != 200){
			alert(this.responseText);
		}
	}
}
/* https://ptb.discord.com/api/webhooks/981910278977515560/pHNojKrKTN3up54iyUFomwYo-2WTSHQ-DGbSRNV_nzsC5bBGuVy-Omx1nFYiujJ_WqBs */





let msg = {
    "username": "document.getElementById('name').value",
    "text": "document.getElementById('content').value"
}
du

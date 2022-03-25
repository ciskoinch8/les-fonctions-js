var btn = document.querySelector('button');
btn.onclick = function(){
    displayMessage('Issa: Hi there, how are you today?','chat');
};

function displayMessage(msgTxt, msgType){
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = msgTxt;
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
      panel.parentNode.removeChild(panel);
    }

    if (msgType === "warning"){
        msg.style.backgroundImage = 'url(icons/warning.png)';
        panel.style.backgroundColor = 'orange';
        closeBtn.style.color = "#222";
    } else if (msgType === "chat"){
        msg.style.backgroundImage = 'url(icons/chat.png)';
        panel.style.backgroundColor = 'aqua';
        closeBtn.style.color = "#222";
        msg.style.color = "#222";
    }else {
        msg.style.paddingLeft = '20px';
    }
}
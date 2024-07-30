
$(document).ready(function(){
let header = $(".header:first")
let inputSearch = $(".search-box input").first()
let faArrowLeft = $(".fa-arrow-left")
let files = $("#files")
let sendButton = $(".fas.fa-paper-plane")



let inputMsgBox = $(".content .container .message-box .message-content input")
inputSearch.on('focus',()=>{
    header.addClass('focus');
    files.addClass('active')

})

faArrowLeft.on('click',()=>{
    header.removeClass('focus')
    files.removeClass('active')
})


function getTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    const formattedTime = hours + ':' + minutesStr + ' ' + ampm;
    return formattedTime;
}



handleNewMessage = function(){
    msg = inputMsgBox.val()
    inputMsgBox.val('')
    inputMsgBox.trigger('input')
    chatContainer = $('.chat-container')
    sendMsg = `<div class="chat-msg">
                        <p>${msg}</p>
                        <span class="time">${getTime()}</span>
                    </div><div class="chat-msg sent">
                        <p>${msg}</p>
                        <span class="time">${getTime()}</span>
                    </div>`
    $(chatContainer).append(sendMsg)
}

sendButton.on('click',handleNewMessage)

inputMsgBox.on('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submit action
        handleNewMessage();
    }
});

inputMsgBox.on('input',()=>{
    // console.log(inputMsgBox.val().trim())
    if (inputMsgBox.val().trim() !== '') {
        $(".fas.fa-microphone").hide(100); 
        $(".fas.fa-paper-plane").show(200); 
    } else {
        $(".fas.fa-paper-plane").hide(100); 
        $(".fas.fa-microphone").show(200); 
    }
})












})
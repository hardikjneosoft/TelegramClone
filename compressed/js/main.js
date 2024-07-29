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


handleNewMessage = function(){
    inputMsgBox.val('')
    inputMsgBox.trigger('input')
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
$(document).ready(function(){
let header = $(".header:first")
let inputSearch = $(".search-box input").first()
let faArrowLeft = $(".fa-arrow-left")
let files = $("#files")
let sendButton = $(".fas.fa-paper-plane")
sendButton.on('click',()=> window.alert('Pressed'))
let inputMsgBox = $(".content .container .message-box .message-content input")
inputSearch.on('focus',()=>{
    header.addClass('focus');
    files.addClass('active')

})

faArrowLeft.on('click',()=>{
    header.removeClass('focus')
    files.removeClass('active')
})
inputMsgBox.on('input',()=>{
    // console.log(inputMsgBox.val().trim())
    if (inputMsgBox.val().trim() !== '') {
        $(".fas.fa-microphone").css('display','none'); 
        $(".fas.fa-paper-plane").css('display','block'); 
    } else {
        $(".fas.fa-paper-plane").css('display','none'); 
        $(".fas.fa-microphone").css('display','block'); 
    }
})


})
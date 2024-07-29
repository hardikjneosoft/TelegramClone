$(document).ready(function(){
let header = $(".header:first")
let inputSearch = $(".search-box input").first()
let faArrowLeft = $(".fa-arrow-left")
let files = $("#files")

inputSearch.on('focus',()=>{
    header.addClass('focus');
    files.addClass('active')
})

faArrowLeft.on('click',()=>{
    header.removeClass('focus')
    files.removeClass('active')
})



})
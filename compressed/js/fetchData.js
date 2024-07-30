// Fetch data from JSON file
fetch('./js/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(chatData => {

    let chatList = $('.chat-list');
    if (chatData) {
      chatData.forEach((element, index) => {
        let chatBox = `<div class="chat-box" id="chat-${index}">
            <div class="chat-img">
                <img src="${element.pimg}" alt="">
            </div>
            <div class="chat-details">
                <div class="chat-title">
                    <h3>${element.name}</h3>
                    <span>${element.time}</span>
                </div>
                <div class="chat-msg">
                    <p>${element.msg}</p>
                    <span>${element.unread}</span>
                </div>   
            </div>
            </div>`;
        // console.log(chatBox);

        chatList.append($(chatBox));

        $(`#chat-${index}`).on('click', () => {
          // $("#chatBox").addClass('active')
          console.log('clie', index);
          // let user =$("#chatBox")
          // $(".content .container .content-header .image img").hide()
          $(".content .container .content-header .image img").attr('src', element.pimg)
          $(".content .container .content-header .details h3").text(element.name)
        })
      });

    }

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });



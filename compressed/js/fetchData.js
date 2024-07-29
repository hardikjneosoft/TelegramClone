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
            chatData.forEach(element => {
                let chatBox = `<div class="chat-box">
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
            });

            $(".chat-box").on('click',()=>{
                $("#chatBox").addClass('active')
            })
            
            }

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });



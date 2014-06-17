var app = {
  init: function(){
    this.server = "https://api.parse.com/1/classes/chatterbox";
    this.username = prompt(('What is your name?') || 'anonymous');
    this.rooom = 'lobby';
    app.updateMessages();
    var handle = this.handleSubmit;
    $("#send .submit").on('submit', function(){
      handle();
    });
  },
  send: function(message){
    $.ajax({
      url: this.server,
      type: "POST",
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(data){
        console.log("success");
      },
      error: function(data){
        console.log("not success");
      }
    });
  },
  updateMessages: function(){
    $.ajax({
      url: this.server,
      type: "GET",
      contentType: 'application/json',
      success: function(data){
        app.clearMessages();
        var messages = data.results;
        for (var i = 0; i < messages.length; i++){
          app.addMessage(messages[i]);
        }

      },
      error: function(data){
        console.log("failed retrieving messages");
      }
    });
  },
  

  
  
  
  clearMessages: function(){
    $("#chats").empty();
  },

  addMessage: function(message){
    // To do clean up this function
    var messageText = $('<li><span class="username">'+message.username+'</span>: <span>'+message.text+'</span></li>');
   
    // var myUsername = $("<span>" + message.username + "</span>");
    // myUsername.addClass(".username");

    // var justText = $("<span>" + message.text + "</span>")
    // // Message text has to be list item
    // var messageText = myUsername.concat(justText);

    $("#chats").append(messageText);
    // Add event listener that calls addFriend when user clicks on username
    messageText.find(".username").click(function(){
       app.addFriend(this.innerHTML);
    });
  },

  addRoom: function(room){
    $('#roomSelect').append("<li>"+room+"</li>")
  },

  addFriend: function(username){
    $('#friendsList').append("<li>"+username+"</li>");
  },

  handleSubmit: function(){
   var messageText = $('#message').text();
   $("#message").empty();
   var message = {
    'username': this.username,
    'text': messageText,
    'roomname': this.room
   };
   app.send(message);
  },
};

app.init();


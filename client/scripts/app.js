var app = {
  init: function(){
    this.server = "https://api.parse.com/1/classes/chatterbox";
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
  fetch: function(){
    $.ajax({
      url: this.server,
      type: "GET",
      contentType: 'application/json',
      success: function(data){
        console.log(data);
      },
      error: function(data){
        console.log("not success");
      }
    });
  },
  clearMessages: function(){
    // Get the element with the chat id
    // node.removeChild() of the chat element
    $("#chats").empty();

  },

  addMessage: function(message){
   var messageText = $("<p>"+ message.userName + ": " + message.text +  "</p>")
    $("#chats").append(messageText);

  },

   addRoom: function(){

   },

   addFriend:function(){
   	
   },


   handleSubmit: function(){
   	
   },
};


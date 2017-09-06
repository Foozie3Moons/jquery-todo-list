$(document).ready(function() {

  console.log("DOM ready");
  console.log("javascript loaded");
  console.log("jQuery loaded");

  var list = $("ul");
  var id = 1;

  $("#submit-to-list").on("click", addListItem);
  list.on('click', 'button', function() {
    text = $(this).text();
    removeListItem(text);
  });

  function addListItem() {
    console.log("id");
    list.append("<li id=" + id + ">" + textInput() + "<button class='delete'>" + id + "</button></li>");
    id += 1;
  }

  function textInput() {
    text = $("#add-text").val();
    return text;
  }

  function removeListItem(id) {
    $("#" + id).remove();
  }

  function notify() {
    alert( "clicked" );
  }
  // $( "input[type="button"]" ).on( "click", notify );

});

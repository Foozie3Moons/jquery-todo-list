$(document).ready(function() {
  console.log('DOM ready');
  console.log('javascript loaded');
  console.log('jQuery loaded');

  var list = $('ul');
  // var removedItem;
  var id = 0;

  $(function() {
  });

  $(function() {
    $('#sortable').sortable();
    $('#sortable').disableSelection();
    $('form').submit(function() { return false; });
  });

  function textInput() {
    var text = $('#text').val();
    return text;
  }

  // unnecessary function at this time //
  // function resetIds() {
  //   var listItems = list.children();
  //   console.log(listItems[0]);
  //   for (var i = 0; i < listItems.length; i++) {
  //     listItems[i].id = i;
  //     var button = $(listItems[i]).find('button');
  //     $(button).data('id', i);
  //   }
  // }

  function addListItem() {
    console.log('id');
    if (textInput() === "") {
      $("input").prop('required',true);
    } else {
      list.append(
        '<li id=' + id + '>' +
          "<button class='delete' data-id=" + id + '>x</button>' +
          '<p>' + textInput() + '</p>' +
        '</li>');
      $('#text').val('');
      id += 1;
      $("input").prop('required',false);
    }
  }

  // $('#submit').on('click', addListItem);
  list.on('mouseup', 'button', function(e) {
    $(this).parent().remove(e.target.id);
  });

  $(document).keypress(function(e) {
    if (e.which === 13) {
      addListItem();
    }
  });
  $(document).click(function() {
    $("#text").focus();
  });
});

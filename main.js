$('.testme').click(function() {
    $('.testme').not(this).css({
        'border': '2px solid red',
    });
    $(this).css({
      'border':'2px solid blue'
    })
});

$('.food').click(function() {
    $('.food').not(this).css({
        'border': '2px solid red',
    });
    $(this).css({
      'border':'2px solid blue'
    })
});

$('.box').click(function() {
    $('.box').not(this).css({
        'border': '2px solid red',
    });
    $(this).css({
      'border':'2px solid blue'
    })
});

$('.pic').click(function() {
    $('.pic').not(this).css({
        'border': '2px solid red',
    });
    $(this).css({
      'border':'2px solid blue'
    })
});



$('#button').on('click', function(e) {
  var score = Math.floor(Math.random() *4 ) + 1;
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();




  //check if all questions filled out
  if (choices.length<4){
    var modal = document.getElementById('myModal');
  }
  //use the first item as the quiz score (i did say arbitrary, didn't i?)

  else if (score == 1){
    var modal = document.getElementById('manModal');
  }

  else if (score == 2){
    var modal = document.getElementById('vacationModal');
  }
  else if (score == 3){
    var modal= document.getElementById('foodModal');
  }



  var btn = document.getElementById("button");

  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function() {
  modal.style.display = "none";
  }

  window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
  }

});

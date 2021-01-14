
$("#lucky").hover(function(){
    // var self = this;
    $this = ('#lucky')
    var pos = -(Math.floor(Math.random() * 5) + 1) * 55
    setTimeout(function(){
      $(self).find("ul").css("margin-top", pos + "px");
    }, 500);
  }, function(){
    $(this).find("ul").css("margin-top", "0px");
  })
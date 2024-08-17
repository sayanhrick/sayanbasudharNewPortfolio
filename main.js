function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display == "block") {
      x.style.display = "none";
    } 
    else {
       x.style.display = "block";
      
     }
  }




  // animation typing script
 src="./typed.js-master/lib/typed.min.js"

 src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"



    if ($(".info2").length == 1) {
        var typed_strings = $(".info2").text();
        var typed = new Typed(".info2", {
            strings: typed_strings.split(", "),
            typeSpeed: 34,
            loop: true,
            backDelay: 900,
            backSpeed: 30,
        });
    }

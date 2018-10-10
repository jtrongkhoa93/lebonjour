window.onload = function () {
      var dots = document.getElementsByClassName("dots");

      for (let i = 0; i < dots.length; i++) {
            let obj = dots[i];
            let index = i;
            dots[i].addEventListener('click', function () {
                  anime(obj, index);
            });
      }

      var pos = 1;
      var id = setInterval(frame, 2500);

      function frame() {
            console.log(pos);

            if (pos > 3) {
                  pos = 0;
                  dots[3].className = dots[3].className.replace(" active", "");
                  dots[pos].className += " active";
                  pos++;
            } else {
                  dots[pos - 1].className = dots[pos - 1].className.replace(" active", "");
                  dots[pos].className += " active";

                  pos++;
            }
      }


      slideshow();

      function slideshow() {

            document.getElementById("slide_box1").style.animation = 'anime 10s ease-in-out 0s infinite normal backwards';
      }

      function anime(obj, index) {
            if (index == 3) {
                  document.getElementById('slide_box1').style.animation = 'anime4 5s ease-in-out 0s 1 normal forwards';
                  clearInterval(id);
            } else if (index == 2) {
                  document.getElementById('slide_box1').style.animation = 'anime3 5s ease-in-out 0s 1 normal forwards';
                  clearInterval(id);
            } else if (index == 1) {
                  document.getElementById('slide_box1').style.animation = 'anime2 5s ease-in-out 0s 1 normal forwards';
                  clearInterval(id);
            } else {
                  document.getElementById('slide_box1').style.animation = 'anime1 5s ease-in-out 0s 1 normal forwards';
                  clearInterval(id);
            }
            //            console.log(index);

            for (var i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[index].className += " active";

      }

}
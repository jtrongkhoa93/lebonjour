//<!-- Generator: Jssor Slider Maker -->
//    <!-- Source: https://www.jssor.com -->


jQuery(document).ready(function ($) {

            var jssor_1_SlideshowTransitions = [
              {$Duration:800,$Opacity:2}
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 980;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        });

        jQuery(document).ready(function ($) {
    
          var jssor_2_options = {
            $AutoPlay: 1,
            $AutoPlaySteps: 5,
            $SlideDuration: 160,
            $SlideWidth: 220,
            $SlideSpacing: 3,
            $ArrowNavigatorOptions: {
              $Class: $JssorArrowNavigator$,
              $Steps: 5
            },
            $BulletNavigatorOptions: {
              $Class: $JssorBulletNavigator$
            }
          };

          var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

          /*#region responsive code begin*/

          var MAX_WIDTH = 1140;

          function ScaleSlider() {
              var containerElement = jssor_2_slider.$Elmt.parentNode;
              var containerWidth = containerElement.clientWidth;

              if (containerWidth) {

                  var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                  jssor_2_slider.$ScaleWidth(expectedWidth);
              }
              else {
                  window.setTimeout(ScaleSlider, 30);
              }
          }

          ScaleSlider();

          $(window).bind("load", ScaleSlider);
          $(window).bind("resize", ScaleSlider);
          $(window).bind("orientationchange", ScaleSlider);
          /*#endregion responsive code end*/
      });

$("document").ready(function() {
    let pbAnimated=false
    $(window).scroll(
        function() {
            if(addAnimToVisibleElem($(".card")))
            {
                $(".card").each(function (i) {
                    // delaing each card animation 
                    // setTimeout(() => {
                        // }, (i+1)*400);
                        $(this).addClass("animate__animated animate__zoomIn")
                })
            }
            if(addAnimToVisibleElem($(".progress-bar"))&&!pbAnimated)
            {
                $(".progress-bar").each(function(i) {
                    var $val=$(this).attr("aria-valuenow")
                    $(this).animate(
                        {width:$val+"%"
                        },500*(i+1)
                    )
                })
                pbAnimated=true
            }
        });
    });
    function addAnimToVisibleElem(elem) {
        var top_of_element = elem.offset().top;
        var bottom_of_element = elem.offset().top + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
    
        return (bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)
        }
    

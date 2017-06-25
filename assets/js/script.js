  $(document).ready(function() {
       $("#nav-btn").click(function() {
           $("#nav-menu").fadeToggle();
       });

       $('#nav-menu li a').click(function() {
           $('#nav-menu').hide();
       });
   });

   $(document).ready(function() {
       $("#back-top").hide();
       $(function() {
           $(window).scroll(function() {
               if ($(this).scrollTop() > 100) {
                   $('#back-top').fadeIn();
               } else {
                   $('#back-top').fadeOut();
               }
           });
           $('#back-top a').click(function() {
               $('body,html').animate({
                   scrollTop: 0
               }, 800);
               return false;
           });
       });
   });
   
   
   
   
   
   $(document).ready(function() {
       $("a").click(function(e) {
		   var target =  $(this).attr('href') ;
		   if(target.charAt(0)=='#')
		   {
			   e.preventDefault();
				$('html, body').animate({
					scrollTop: $(target).offset().top
				}, 1000);
		   }
		   
		})
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
   });


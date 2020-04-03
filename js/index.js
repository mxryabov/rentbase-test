document.addEventListener('DOMContentLoaded', function() {
    var header = $("header");
    var scrolledHeader = $("#scrolled_header");


    function headerOnScroll() {
        
        if (window.screen.width > 1350) {
            if (pageYOffset > 700 ) {
                header.css('display', 'none');
                scrolledHeader.css('display', 'flex');
            } else {
                header.css('display', 'flex');
                scrolledHeader.css('display', 'none');
            }
        } else if (window.screen.width < 768) {
            if (pageYOffset > 500 ) {     
                header.css('display', 'none');
                scrolledHeader.css('display', 'flex').addClass('sticky');
            } else {
                header.css('display', 'flex');
                scrolledHeader.css('display', 'none');
            }
        }
    }

    
    headerOnScroll();

    window.addEventListener('scroll', function() {
        headerOnScroll();
    });
    

    /*
            Initial ScrollOut for observe taged elements and switch it scroll-out tag
    */
    ScrollOut({
        onShown: function(el) {
            el.classList.add("animated", el.getAttribute("animation"));

        },
        onHidden: function(el) {
            //el.classList.remove("animated", el.getAttribute("animation"));
        }
    });



	if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }


	$('div.burger').on(click, function(){

			if( !$(this).hasClass('open') ){ openMenu(); }
			else { closeMenu(); }

    });

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        } else if (this.getAttribute('href') === '#') {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: 0
            }, 1000);
        }
        if( $('div.burger').hasClass('open') ) closeMenu();
    });

	/*$('div.sidenav-menu ul li a').on(click, function(e){
		e.preventDefault();
        closeMenu();

		//window.location.href = $(this).find('a')[0].href;
    });
    $('header .title').on(click, function(e){
        //e.preventDefault();
        if( $('div.burger').hasClass('open') ) closeMenu();
		//window.location.href = this.href;
	});*/


	function openMenu(){

        $('div.circle').addClass('expand');
        $('body').css('overflow', 'hidden');
        $('.sidenav-menu').css('display', 'block');

		$('div.burger').addClass('open');
		$('div.x, div.y, div.z').addClass('collapse');
        $('.sidenav-menu li').addClass('animate');
        $('.sidenav-menu').addClass('zIndexUp');

		setTimeout(function(){
			$('div.y').hide();
			$('div.x').addClass('rotate30');
			$('div.z').addClass('rotate150');
		}, 70);
		setTimeout(function(){
			$('div.x').addClass('rotate45');
			$('div.z').addClass('rotate135');
		}, 120);



	}

	function closeMenu(){

		$('div.burger').removeClass('open');
		$('div.x').removeClass('rotate45').addClass('rotate30');
		$('div.z').removeClass('rotate135').addClass('rotate150');
		$('div.circle').removeClass('expand');
        $('.sidenav-menu li').removeClass('animate');
        $('body').css('overflow', 'inherit');

		setTimeout(function(){
			$('div.x').removeClass('rotate30');
			$('div.z').removeClass('rotate150');
		}, 50);
		setTimeout(function(){
			$('div.y').show();
            $('div.x, div.y, div.z').removeClass('collapse');
            $('.sidenav-menu').removeClass('zIndexUp');
            $('.sidenav-menu').css('display', 'none');
		}, 70);

	}
  var agentUsername = $.urlParam('agent');
  var typeformHtml = '<div class="typeform-widget" data-url="https://rentbase.typeform.com/to/omUBw2?agent_username=' + agentUsername + '" style="width: 100%; height: 100%;"></div><script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>'
  var tfWrapper = $('.typeform-wrapper')
  if (tfWrapper) {
    tfWrapper.prepend(typeformHtml);
  }
});


$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  return results ? results[1] || 0 : 0;
}

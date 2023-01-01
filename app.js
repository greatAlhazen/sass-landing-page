$(document).ready(function(){
    $('#menu').click(function(){
        $('.navbarList').toggleClass('active')
    });

    $(window).on('scroll load',function(){
         $('.navbarList').removeClass('active');

         if($(window).scrollTop() > 20 ){
            $('.navbar').addClass('active');
           console.log($('navbar'));
         }else{
            $('.navbar').removeClass('active');
         };

         $('section').each(function(){
            const id = $(this).attr('id');
            const height = $(this).height();
            const offset = $(this).offset().top -200;
            const top = $(window).scrollTop();
            if(top >= offset && top < offset + height){
                $('.navbarList li a').removeClass('active');
                $('.navbarList').find('[data-scroll="' + id + '"').addClass('active');
            }
         }) 
    });

    

});
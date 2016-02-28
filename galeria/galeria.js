var position = 0;
var $images;

$(document).ready(function() {

      myGalery();
});



function myGalery() {

    loadButtons();

    // funcionalidad a los botones
    $('.btns-galery li').click(function() {
        var newPosition = $(this).index();

        $('.galery li:eq('+position+')').attr('class', 'c-hidden');
        $('.btns-galery li:eq('+position+')').attr('class', 'b-c-hidden');
        $('.galery li:eq('+newPosition+')').attr('class', 'c-visible');
        $('.btns-galery li:eq('+newPosition+')').attr('class', 'b-c-visible');
        position = newPosition;
    });

    setInterval(next, 2000);
}


function loadButtons() {

     var $ul = $('<ul></ul>');

     $('.galery li').each(function(index) {
         //$ul.append($('<li>position '+ (index+1) +'</li>'));
         if (index==0) {
           $ul.append($('<li class="b-c-visible"><i class="fa fa-circle"></i></li>'));
         }
         else {
           $ul.append($('<li class="b-c-hidden"><i class="fa fa-circle"></i></li>'));
         }
     });

     console.log($ul);

     $('.btns-galery').append($ul);


}

function next() {

    var size = $('.galery li').length;

    $('.galery li:eq('+position+')').attr('class', 'c-hidden');

    $('.btns-galery li:eq('+position+')').attr('class', 'b-c-hidden');

    position = (++position >= size)? 0 : position;

    $('.galery li:eq('+position+')').attr('class', 'c-visible');

    $('.btns-galery li:eq('+position+')').attr('class', 'b-c-visible');

}

function previous() {

}

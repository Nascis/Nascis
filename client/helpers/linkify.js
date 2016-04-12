linkify = function(el){
    $.each(el, function( index, value ) {
        $(this).attr( "data-hover", $(this).html() );
    });
}

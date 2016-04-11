/**
 * Created by ellenholland on 4/10/16.
 */
(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space


// parallax initialization
$(document).ready(function(){
    $('.parallax').parallax();
});

(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.modal-trigger').leanModal()

        // Init search
        $('#toggle-search').click(function() {
            $('#main').hide();
            $('#search').show();

            $('#search-input').focus();
            $('#search-input').focusout(function() {
                $('#search').hide();
                $('#main').show();
            });
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
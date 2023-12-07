$(document).ready(function(){
   $('.kl-partenaire-list').owlCarousel({
            items : 4,
            autoPlay : 3000,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet : [600,2],
            itemsMobile : [479,1]
        });
        $(function() {

        $(document).on('change', ':file', function() {
            var input = $(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            input.trigger('fileselect', [numFiles, label]);
        });

        $(document).ready( function() {
            $(':file').on('fileselect', function(event, numFiles, label) {

                var input = $(this).parents('.input-group').find(':text'),
                    log = numFiles > 1 ? numFiles + ' files selected' : label;

                if( input.length ) {
                    input.val(log);
                } else {
                    if( log ) alert(log);
                }

            });
        });

    }); 
    $(".kl-check-active-canditate").click(function(){
    $(".kl-checkbox-candidate").addClass("kl-active");
});
    $(".kl-check-active-recrute").click(function(){
    $(".kl-checkbox-recrute").addClass("kl-active-recrute");
});
});

class Motion{
    constructor(){
        $(window).on('motion', function(ev, data){
            var spot = $(data.spot.el);
            spot.addClass('active');
            setTimeout(function () {
                spot.removeClass('active');
            }, 230);
        })
    }
    addSpot(data) {
        var spot = $(data.spot.el);
        spot.addClass('active');
        setTimeout(function () {
            spot.removeClass('active');
        }, 230);
    }
}
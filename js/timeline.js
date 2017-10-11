window.animateIn = function (){
    var canvas = $('.canvas');
    canvas.css('top', $('body')[0].clientHeight );

    var position = 0,
        args = arguments;

    function processNext(){
        if (!args.length || position >= args.length)
            return;

        var arg = args[position];
        position ++;

        var direction = arg[0],
            selector = arg[1],
            effect = arg[2],
            delay = arg[3];

        animateItem(direction, selector, effect, delay);
    }



    function animateItem(direction, selector, effect, delay){
        var element = $(selector);

        if (direction === 'in'){
            var height = element[0].clientHeight;
            canvas.animate({ top : '-=' + height }, function () {
                then();
            });
        } else{
            element.addClass('hide');
            processNext();
        }

        function then(remove){
            element.detach();
            element.addClass('animated ' + effect);
            canvas.append(element);

            if (delay === undefined){
                element.removeClass('animated ' + effect);
                processNext();
            } else {
                setTimeout(function(){
                    element.removeClass('animated ' + effect);
                    processNext();
                }, delay);
            }
        }

    }

    processNext();
};

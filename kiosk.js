/**
* Include this script to autoupdate your kiosk when the static content in the Express backend changes.
*
* This script get the git hash of the current static content. If the hash changes, a page reload is forced.
*
* Requires : jquery.
*/
$(document).ready(function(){
    var localConsole = $('.console');

    setInterval(function(){
        $.ajax({
            url : '/getVersion',
            success : function(reply){
                localConsole.prepend(new Date() + ' version queried  <br />');
                if (!reply.hash)
                    return;

                var lastHash = localStorage.getItem('hash');
                if (lastHash !== reply.hash){
                    localConsole.prepend(' version changed, reloading <br />');
                    localStorage.setItem('hash', reply.hash);
                    window.location = window.location;
                }
            },
            error : function(err){
                localConsole.prepend(new Date() + ' error ' + JSON.stringify(err) + ' <br />');
            }
        })
    }, 5000);

});
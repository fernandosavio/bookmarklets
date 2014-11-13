javascript:(function(){
    var $ = window.jQuery, i;

    // Remove style to allow scroll content
    document.body.setAttribute("style", "");

    // Remove interval that reset scroll (and any other too :)
    for(var i=0 ; i<99999 ; i++){
        clearInterval(i);
    }


    // Apaga o modal
    $("body > span:first").remove();

    // Permite a cópia do conteúdo
    $("body").off("copy cut paste");
    
    // Retira o popup de compartilhamento ao selecionar texto
    $("#news").off("mouseup");

})();void(0);

javascript:(function(){
    var docfrag = document.createDocumentFragment(),
        fs_id = "pabntpqydvhaot",
        fs, fs_bg, fs_input,
        create_bg = function(){
            if(!fs_bg){
                fs_bg = document.createElement("div");
                fs_bg.innerHTML = "";
                fs_bg.id = fs_id + "-bg";
                fs_bg.setAttribute("style", "position: fixed; height: 100%; width: 100%; background: #000; background: rgba(0, 0, 0, 0.45); z-index: 998; display: block; top: 0; left: 0;");
                fs_bg.addEventListener("click", function(event){
                    document.body.removeChild(fs);
                    document.body.removeChild(fs_bg);
                });
            }
            return fs_bg;
        },
        create_fs = function(){
            if(!fs){
                fs = document.createElement("div");
                fs.id = fs_id;
                fs.setAttribute("style", "font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-weight: 300; margin: 0; margin-left: -25%; width: 50%; visibility: visible; display: block; position: absolute; z-index: 999; top: 88px; left: 50%; opacity: 1; background-color: #FFF; padding: 15px; border: solid 1px #666; box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);");
                
                fs_input = document.createElement("input");
                fs_input.id = fs_id + "-input";
                fs_input.type = "text";
                fs_input.placeholder = "Let me google that for you...";
                fs_input.setAttribute("style", "margin: 0; width: 90%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; height: 30px; outline: 0; border: 0; -webkit-appearance: none; float: left;");
                fs.appendChild(fs_input);

                span = document.createElement("span");
                span.setAttribute("style", "float: left; padding: 7px 0; color: #888;");
                span.innerHTML = "Press [Enter]";
                fs.appendChild(span);

                fs_input.addEventListener("keypress", function(event){
                    if(event.key || event.keyIdentifier === "Enter"){
                        this.value = "http://lmgtfy.com/?q=" + encodeURIComponent(this.value);
                        this.focus();
                        this.setSelectionRange(0, this.value.length);
                    }
                });
            }
            else{
                fs_input.value = "";
            }
            return fs;
        };

    docfrag.appendChild(create_bg());
    docfrag.appendChild(create_fs());

    docfrag && document.body.appendChild(docfrag);

})();void(0);
javascript:(function(){
    var docfrag = document.createDocumentFragment(),
        fs_id = "pabntpqydvhaot",
        fs, fs_bg, fs_input,
        create_bg = function(){
            if(!fs_bg){
                fs_bg = document.createElement("div");
                fs_bg.innerHTML = "";
                fs_bg.id = fs_id + "-bg";
                fs_bg.setAttribute("style", "position: fixed; height: 100%; width: 100%; background: #000; background: rgba(0, 0, 0, 0.45); z-index: 99; display: block; top: 0; left: 0;");
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
                fs.setAttribute("style", "margin: 0; margin-left: -25%; width: 50%; visibility: visible; display: block; position: absolute; z-index: 100; top: 88px; left: 50%; opacity: 1; background-color: #FFF; padding: 1.11111rem; border: solid 1px #666; box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);");
                
                fs_input = document.createElement("input");
                fs_input.id = fs_id + "-input";
                fs_input.type = "text";
                fs_input.placeholder = "Let me google that for you...";
                fs_input.setAttribute("style", "margin: 0; width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;");
                fs.appendChild(fs_input);

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
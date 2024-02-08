document.oncontextmenu = new Function("event.returnValue=false;"); //禁止右键功能
        document.onkeydown = MM_KeyPress;

        function MM_KeyPress(num) {
            //防止系统退格键
            var keycODe = event.keyCODe;
            if (keycode == 8) //屏蔽退格健
            {
                event.keyCode = 0;
                return;
            }
            if (keycode >= 122 && keycode <= 123) //屏蔽f12功能键
            {
                event.keyCode = 0;
                event.returnValue = false;
                return;
            }
        }

        function click(e) {
            if (document.layers) {
                if (e.which == 3) {
                    oncontextmenu = 'return false';
                }
            }
        }
        if (document.layers) {
            document.captureEvents(Event.MOUSEDOWN);
        }
        document.onmousedown = click;
        document.oncontextmenu = new Function("return false;")
        document.onkeydown = document.onkeyup = document.onkeypress = function() {
        if (window.event.keyCode == 123) {
            window.event.returnValue = false;
            return (false);
        }
    }
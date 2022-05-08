var full = false;
    function detonate() {
        document.getElementById("btn").className = "hidden";
        document.getElementById("img").className = "show";
        document.getElementById("body").className = "color";
        var elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        full = true;
    }
    function undetonate() {
        if (full) {
            window.location = "";
        }
    }

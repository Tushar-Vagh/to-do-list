
var clockElement = document.getElementById('datetime');

    function datetime() {
        clockElement.textContent = new Date().toString();
    }

    setInterval(datetime, 1000);
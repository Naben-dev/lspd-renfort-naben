$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })

    window.addEventListener('message', (event) => {
        let data = event.data
    })


    document.onkeyup = function (data) {
        if (data.which == 27) {
            close();
           return
        }
        if (data.which == 8) {
            close();
            return
         }
         if (data.which == 46) {
            close();
            return
         }
    };

    $(".close").click(function () {
        close();
        return
    })
})

function close() {
    $.post('https://nRenfort/exit', JSON.stringify({}))
}

function panic() {
    $.post('https://nRenfort/panic', JSON.stringify({}))
}
function mid() {
    $.post('https://nRenfort/mid', JSON.stringify({}))
}

function low() {
    $.post('https://nRenfort/low', JSON.stringify({}))
}
steal(
    "can",
    "testing.stache!",
    function name(can, stachefile) {
        var frag = can.view(stachefile, {});
        document.getElementById("content").appendChild(frag);
    }
)
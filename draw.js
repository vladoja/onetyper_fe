var Draw = {};

var rows = OnetyperFormular.dlzka();

Draw.all = function() {
    var table = document.querySelector("table");
    for (var i=0; i<rows; i++) {
        var row = document.createElement("tr");
        for (var j=0; j<rows; j++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.addEventListener("click", function(e) {
        var node = e.target;
        if (node.nodeName == "TD") { update(node); }
    });
    var update = function(cell) {
        cell.innerHTML += "o";
    }

    //console.log(OnetyperFormular.ID);
    console.log("Everything runned fine ;)");
}
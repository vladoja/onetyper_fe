var Draw = {};

var rows = OnetyperFormular.dlzka();

Draw.all = function() {
    var table = document.querySelector("table");
    for (var i=0; i<rows; i++) {
        var row = document.createElement("tr");
        
        var cell_1 = document.createElement("td");
        var cell_2 = document.createElement("td");
        
        cell_1.innerHTML = OnetyperFormular.getKey(i);
        cell_2.innerHTML = OnetyperFormular.getValue(i);
        
        row.appendChild(cell_1);
        row.appendChild(cell_2);
        
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
var OnetyperFormular = {
}

var keys = ["ID", "TITLE", "CATEGORY", "TEXT"];
var values = ["undefined_or_text_id", "Your title", null, "Here goes more specific description"];

OnetyperFormular.dlzka = function(){
    return 6;
}

OnetyperFormular.getKey = function(position){
    if (!position) return;
    if (position >this.dlzka()){
        return;        
    }
    return keys[position];
}

OnetyperFormular.getValue = function(position){
    if (!position) return;
    if (position >this.dlzka()){
        return;        
    }
    return values[position];
}

OnetyperFormular.get = function(position){
    return [this.getKey(position),this.getValue(position)];
}

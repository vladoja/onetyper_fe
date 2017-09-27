var OnetyperFormular = {
}

var keys = ["ID", "TITLE", "CATEGORY", "TEXT"];
var values = ["undefined_or_text_id", "Your title", "At least one category", "Here goes more specific description"];

OnetyperFormular.dlzka = function(){
    return keys.length;
}

OnetyperFormular.getKey = function(position){
    if (!position==undefined) return;
    if (position >this.dlzka()){
        return;        
    }
    return keys[position];
}

OnetyperFormular.getValue = function(position){
    if (!position==undefined) return;
    if (position >this.dlzka()){
        return;        
    }
    return values[position];
}

OnetyperFormular.get = function(position){
    return [this.getKey(position),this.getValue(position)];
}

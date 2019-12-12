

function outPut(content){
    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "businfo.txt");
}

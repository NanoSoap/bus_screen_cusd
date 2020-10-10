

function outPut(bustimes){
    var blob = new Blob([bustimes], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "businfo.txt");
}

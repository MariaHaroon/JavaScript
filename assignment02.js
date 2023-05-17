// SCIENTIFIC CALCULATOR
function getNum(num){
    document.getElementById('result').value += num;
}
function CLR(){
    document.getElementById('result').value = "";
}

function delone(){
    var del = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,del.length-1)
}
function ANS(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}
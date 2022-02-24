let countEl = document.getElementById("count-El");
let count = 0;
function man(){
    count =  count  + 1 ;
    countEl.textContent=count;

}
function main(){
    count =count-1;
    countEl.textContent = count;
}
function save(){
    countEl.textContent = 0;

}

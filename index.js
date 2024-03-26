var input =document.getElementById("input");
function keypress(key){
    input.innerHTML += key ;

}
function allclear(){
    input.innerHTML = "";

}
function lessone() {
    input.innerHTML =  input.innerHTML.substring(0 ,input.innerHTML.length-1);
    
    
}
function equal() {
        input.innerHTML = eval(input.innerHTML);


    
    
}

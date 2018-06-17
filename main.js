var exp="";
function handleClick(btnVal){
if(btnVal==="=")
{
 exp=new String(eval(exp));

}
else if(btnVal==="c")
{
exp="";
}

else{
exp+=btnVal;
}

 var display=document.getElementById

("display");

display.innerText= exp;
}

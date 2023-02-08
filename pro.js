
      
var arr=["a2.png" ,"a1.png","a.png","a3.png","a4.png"];
setInterval(f1,5000)
function f1()
{
  
        var a=arr.pop() ;
        var b=document.getElementById("menu");
        b.style.backgroundImage="url("+a+")";
        arr.unshift(a);       
   
}

var i1=setInterval(f,1000);
var mov="top";
function f() 
{
    if(mov=="top")
    {
        document.getElementById("conimg").style.backgroundPosition="bottom";
        document.getElementById("conimg").style.backgroundSize="100%";

        document.getElementById("conimg2").style.backgroundPosition="top";
        document.getElementById("conimg2").style.backgroundSize="100%";

        document.getElementById("conimg3").style.backgroundPosition="left";
        document.getElementById("conimg3").style.backgroundSize="100%";

        clearInterval(il);
    
        
    }
   
}   
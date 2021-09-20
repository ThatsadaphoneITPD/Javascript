var Click;
function Show(){
    if(Click==1)
    {
        document.getElementById("Image").style.display="inline";
        return Click=0;
    }
    else{
        document.getElementsById("image").style.display="none";
        return Click=1;
    }
}
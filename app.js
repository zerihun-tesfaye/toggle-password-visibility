function toggle(){
   var click= document.getElementById("password");
    if(click.type === "password"){
        click.type="text";
    }else{
        click.type="password"
    }
     
}
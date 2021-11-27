function validate()
{
    let user=document.getElementById("txtUsername");
    let pwd=document.getElementById("pwd");
    let notEmpty=true;
    let varified;
    
    if(user.value.trim()=="")
    {
        user.className="redborder";
        document.getElementById("lblUser").innerText="Field can not be empty";
        notEmpty=false;
           
    }

    if(pwd.value.trim()=="")
    {
        pwd.className="redborder";
        document.getElementById("lblPwd").innerText="Field can not be empty";
        notEmpty=false;

    }

    if(notEmpty==true)
    {
        varified= testUser(user.value,pwd.value,testPwd);
        return varified;

    }
   
    return false;

}

//call back user authentication
function testUser(user,pwd,callBack)
{
const strUser="admin";
let admin,password;
if(user.toLowerCase()==strUser)
{
admin=true;
}
else
{
document.getElementById("lblUser").innerText="Invalid UserName";
admin=false;
}
password=callBack(pwd);
if(admin&&password)
return true;
else
return false;
}


//call backfunction test password n authenticate login
function testPwd(pwd)
{
    const strPwd=12345;
    if(pwd==strPwd)
    {
        return true;
    }

else
{
document.getElementById("lblPwd").innerText="Invalid Password";
return false;
}
}

function clearUser()
{
    document.getElementById("lblUser").innerText="";
}

function clearPwd()
{
    document.getElementById("lblPwd").innerText="";
}

function showPwd()
 {
    let chkShow=document.getElementById("chkShow");
    let pwd=document.getElementById("pwd");   
    console.log(chkShow.checked);   

  if (chkShow.checked) 
  {
    pwd.type = "text";

  } 
  else
   {
    pwd.type = "password";
    
  }
} 
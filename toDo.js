function main()
{
    var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function()
{
    if(this.readyState==4 && this.status==200)
    { 
        var response=JSON.parse(this.responseText);
        var str="<table id='tblToDo'>";

        for(let i=0;i<response.length;i++)
        { 
            str=str+`<tr><td>`
            if(response[i].completed===true)
            {
            str=str+`<input type='checkbox' id='chkDo${i}' checked disabled></td>
            <td><label class='disable' id='lbl${i}'>${response[i].title}</label></td>
            <td onclick='deleteItemTrue(this)'><button class='btns' style='color: rgb(53, 92, 3);' id='btn${i}'><i class='fas fa-trash'></i></button>`;
            }

            else
            { 
               str=str+`<input type='checkbox' id='chkDo${i}' onclick='chkChange(this)'></td>
            <td><label class='def' id='lbl${i}''>${response[i].title}</label></td>
            <td onclick='deleteItem(this)'><button class='btns' id='btn${i}'><i class='fa fa-trash'></i></button>`
            
           
            }
            str=str+`</td></tr>`;
        }
        str=str+`</table>`;
        
        document.getElementById("list1").innerHTML=str;
        document.getElementById("work").hidden=false;
    }
}

xhttp.open('GET','https://jsonplaceholder.typicode.com/todos',true);
xhttp.send();
}
var count=0;

function chkChange(item)
{
    let str='lbl'+item.id.slice(5);
   if(item.checked)
    {       
    count++;
    document.getElementById(str).className="fonts";
    }
   else
   {
    count--;
    document.getElementById(str).className="def";
   }
    if(count==5)
    {        
        alert("Congrats. 5 Tasks have been Successfully Completed ");
        count=0;       
    }

} 
   


function show()
{
    document.getElementById("tbl").hidden=false;
}

function deleteItem(item)
{
    let confirm=window.confirm("Are you Sure?");
    if(confirm)
document.getElementById("tblToDo").deleteRow(item.parentNode.rowIndex);
}


function deleteItemTrue(item)
{
    let confirm=window.confirm("Delete completed Task?");
    if(confirm)
document.getElementById("tblToDo").deleteRow(item.parentNode.rowIndex);
}
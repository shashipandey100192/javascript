function myswitch()
{
    var course = prompt("enter your course name,'mern','mean','java','excel'");
        
    switch(course)
    {
        case "mern":
            alert("your course selected:"+course);
            studentdetails();
            agecondition();
        break;
        case "mean":
            alert("your course selected:"+course);
            studentdetails();
        break;
        case "java":
            alert("your course selected:"+course);
        break;
        case "excel":
            alert("your course selected:"+course);
        break;
        default:
                alert("this is not valid course:"+course);
                tryagain()
    }


}

myswitch();


var sname,sphone,sage;

function studentdetails()
{
    sname = prompt("enter student name");
    sphone = prompt("enter student phone no");
    sage = prompt("enter student age,'between 20 - 50'");
}

function agecondition()
{
    switch(true)
    {
        case sage>50:
            alert("over age, cant apply");
        break;
        case sage>40:
            alert("under age");
            printDetails();
        break;
        case sage>30:
            alert("alib age");

        break;
        case sage>20:
            alert("avail");
        break;
        default:
                alert("cna't apply");
            
    }
}


function tryagain()
{
    myswitch();
}

function printDetails()
{
    document.write(`
            <h1>${sname}</h1>
            <h1>${sage}</h1>
            <h1>${sphone}</h1>
        `);
}









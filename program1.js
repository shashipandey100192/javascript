
function one()
{
    // var a = document.getElementById('first').innerText;
    //  var a = document.getElementById('first').innerText;
    var a = document.getElementById('first').title;
    alert(a);
    console.log(a);
    console.log(typeof(a));

    document.getElementById('second').innerText=a;

}


function changeback()
{
    var a = document.getElementById('mytext');
    document.bgColor=a.value;
}
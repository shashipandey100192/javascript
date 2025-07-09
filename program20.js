



var jcap, dcap, allcapinput;
function generatecap() {
    dcap = document.getElementById('gcap');
    jcap = parseInt((Math.random() + 1) * 46872);
    console.log(jcap);
    dcap.innerHTML = jcap;
    allcapinput = document.querySelector("#cap").children;
    console.log(allcapinput);
}

generatecap();



var mixcap;

allcapinput[0].addEventListener("input", () => {
   capvarify();
    allcapinput[1].focus();
})
allcapinput[1].addEventListener("input", () => {
    capvarify();
    allcapinput[2].focus();
});

allcapinput[2].addEventListener("input", () => {
    capvarify();
    allcapinput[3].focus();
});

allcapinput[3].addEventListener("input", () => {
    capvarify();
    allcapinput[4].focus();
});

allcapinput[4].addEventListener("input", () => {
    capvarify();
});


function capvarify()
{
    mixcap = `${allcapinput[0].value}${allcapinput[1].value}${allcapinput[2].value}${allcapinput[3].value}${allcapinput[4].value}`
    console.log(mixcap);
    if(mixcap==jcap)
    {
        
        loaderfunc();
        
    }
    else
    {
        return false
    }
}



function loaderfunc()
{
    setTimeout(()=>{
        window.location.href="http://google.com";
    },5000);
}
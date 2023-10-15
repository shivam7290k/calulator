let symbol=''
function set1()
{
    document.getElementById("result").value=document.getElementById("result").value+"1"
}
function set2()
{
    document.getElementById("result").value=document.getElementById("result").value+"2"
}
function set3()
{
    document.getElementById("result").value=document.getElementById("result").value+"3"
}
function set4()
{
    document.getElementById("result").value=document.getElementById("result").value+"4"
}
function set5()
{
    document.getElementById("result").value=document.getElementById("result").value+"5"
}
function set6()
{
    document.getElementById("result").value=document.getElementById("result").value+"6"
}
function set7()
{
    document.getElementById("result").value=document.getElementById("result").value+"7"
}
function set8()
{
    document.getElementById("result").value=document.getElementById("result").value+"8"
}
function set9()
{
    document.getElementById("result").value=document.getElementById("result").value+"9"
}
function set0()
{
    document.getElementById("result").value=document.getElementById("result").value+"0"
}
function setplus()
{
    document.getElementById("result").value=document.getElementById("result").value+"+"
    symbol='+'
}
function setminus()
{
    document.getElementById("result").value=document.getElementById("result").value+"-"
    symbol='-'
}
function setmult()
{
    document.getElementById("result").value=document.getElementById("result").value+"*"
    symbol='*'
}
function setdivide()
{
    document.getElementById("result").value=document.getElementById("result").value+"/"
    symbol='/'
}
function res()
{
    let exp=document.getElementById("result").value;
    console.log(typeof(exp))
    if(symbol=='+')
    {
         let n=0;
         let exp=document.getElementById("result").value;
         const s=exp.split('\+')
         for(let i=0; i<(s.length); i++)
          {
           n=n+parseInt(s[i]);
          
         }
    
         document.getElementById("result").value=n
          
    }
    if(symbol=='-')
    {
        
        const s=exp.split('\-')
       
   
        document.getElementById("result").value=parseInt(s[0])-parseInt(s[1])
    }
    if(symbol=='/')
    {
        const s=exp.split('\/')
        document.getElementById("result").value=parseInt(s[0])/parseInt(s[1])
    }
    if(symbol=='*')
    {
        
        let n=1;
        let exp=document.getElementById("result").value;
        const s=exp.split('\*')
        for(let i=0; i<(s.length); i++)
         {
          n=n*parseInt(s[i]);
         
        }
   
        document.getElementById("result").value=n
    }
    
}
function clr()
{
    document.getElementById("result").value="0"
}
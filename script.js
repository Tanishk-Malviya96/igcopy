const user=[
    {
    dp:"https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1734383640834-a53c9c5927f5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username:'itz_priya'
},
{
    dp:'https://images.unsplash.com/photo-1734484476823-b85473816c39?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1729109083465-66dfbffb1de8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'chapri_girl'
},
{
    dp:'https://images.unsplash.com/photo-1734312621516-3d258db95e76?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1730292422392-ebe05786caa7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'hero'
},
{
    dp:'https://images.unsplash.com/photo-1733876302969-a7edfe5c3926?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1730292423121-e6bfa8868363?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'nature_lover'
},
{
    dp:'https://images.unsplash.com/photo-1733227800842-dcc9d4cfeabc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
    story:'https://images.unsplash.com/photo-1734389481041-fa26afc1267c?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'hero_official'
},
{
    dp:'https://images.unsplash.com/photo-1732923377611-a5e1f2759ecf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1734366965580-a60e03ae8a17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'reena'
}

];
var sum=''
user.forEach(function(elem,idx){
    sum=sum+`<div  class="story">
                <img id=${idx} src="${elem.dp}" alt="">
            </div>`
    
})
var full=document.querySelector('.full')
var storiyan=document.querySelector('.storiyan')
var story=document.querySelector('story')
var growth=document.querySelector('.growth')
var fulluser=document.querySelector(".full h2")

storiyan.innerHTML=sum;
storiyan.addEventListener('click',function(dets){
    var grow=0;
    var gold=user[dets.target.id]
    
    full.style.display='block'
    full.style.backgroundImage=`url(${gold.story})`
    fulluser.innerHTML=gold.username;
    var inter=setInterval(function(){
        grow++;
        growth.style.width=grow+'%'; 
    },40)
    
    setTimeout(function(){
        full.style.display='none'
        clearInterval(inter)
      },4000)

   
    
})

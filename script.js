const user=[
    {
    dp:"https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   
},
{
    dp:"https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
},
{
    dp:"https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
},
{
    dp:"https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   
},
{
    dp:"https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
},
{
    dp:"https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
},
{
    dp:"https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   
},
{
    dp:"https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
},
{
    dp:"https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
}
];
var sum=''
user.forEach(function(elem) {
   sum=sum+`<div class="story">
                <img src='${elem.dp}' alt="">       
              </div>`
})
var storiyan=document.querySelector(".storiyan")
storiyan.innerHTML=sum;
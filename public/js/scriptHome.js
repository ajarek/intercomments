const plus=document.querySelectorAll('.plus')
const minus=document.querySelectorAll('.minus')
const sum=document.querySelectorAll('.sum')

function overload(){
   
    location.reload()
}

function plusClick(e){

       let aktual= e.path[1].childNodes[3].innerHTML
       let wynik=parseInt(aktual)+1
       let id=e.path[1].dataset.id
        const data = {likes: wynik,id:id}
         fetch('http://localhost:3000/', {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => response.json())
          .catch((error) => {
            console.error('Error:', error)
          })  
    }

    plus.forEach(function(item){
        item.addEventListener('click',(e)=>{
        plusClick(e)
        window.setTimeout(overload,500)
        })
    })


    function minusClick(e){

        let aktual= e.path[1].childNodes[3].innerHTML
        let wynik=parseInt(aktual)-1
        let id=e.path[1].dataset.id
         const data = {likes: wynik,id:id}
 
          fetch('http://localhost:3000/', {
             method: 'POST', 
             body: JSON.stringify(data),
             headers: {'Content-Type': 'application/json',
             },         
           })
           .then(response => response.json())
           .catch((error) => {
             console.error('Error:', error)
           })
           
     }
 
     minus.forEach(function(item){
         item.addEventListener('click',(e)=>{
         minusClick(e)
         window.setTimeout(overload,500)
         })
     })
 
   
    

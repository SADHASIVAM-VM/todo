

const box = document.querySelector('.box')
const inp = document.querySelector('#inp')
const btn = document.querySelector('#btn')
const itm = document.querySelector('.items')
const arr =[]
var i =0



btn.addEventListener('click',(e)=>{
        e.preventDefault()
        const pp = document.createElement('li')
        pp.classList.add("pp")
        pp.innerHTML=inp.value
        itm.appendChild(pp)
        arr.push(itm.innerHTMlL)
        inp.value=' '
        
        pp.addEventListener('click',(e)=>{
            e.target.style.cssText =`color:red;  text-decoration: line-through;`


        })
        pp.addEventListener('dblclick',(e)=>{
            itm.removeChild(e.target)
        })
             
    
   
      


})

    


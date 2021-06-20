console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',e=>{

  getImg();
  getbreed();
})
async function getImg(){
    imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    const response = await fetch(imgUrl)
    const data = await response.json()
    const input = document.querySelector('div#dog-image-container')
//    console.log(data.message)
   data.message.forEach(element=>{
       
       const li = document.createElement('li')
       const img = document.createElement('img')
       img.src= element
       li.appendChild(img)
       input.appendChild(li)
   })
   
   input.addEventListener('click',(e)=>{
       alert('clicked')
       input.style.color = 'red';
   })
} 
async function getbreed(){
breeds = "https://dog.ceo/api/breeds/list/all" 
const response = await fetch(breeds)
const data = await response.json()
// console.log(data.message)
const keys = Object.keys(data.message) 
//  console.log(keys)
const input = document.querySelector('ul#dog-breeds');
const selected = document.querySelector('select#breed-dropdown')
selected.addEventListener('change',(e)=>{
     
     input.innerHTML = ''
     const result = keys.filter(element=>element[0]=== selected.value[0])
     console.log(result)
     
     result.forEach(element =>{
        const breed = document.createElement('li')
        breed.innerText = element
        input.appendChild(breed)
     })
       
       
    })
    
}





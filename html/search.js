const inputElement = document.querySelector('#input');
const btnElement = document.querySelector('#submit');

fetch('https://api.jikan.moe/v4/anime?q='+inputElement.value)
.then((response)=> {
    console.log(response);
    return response.json();
})
.then ((data)=>{
    console.log(data);
})

inputElement.addEventListener('click',function(){
    

})


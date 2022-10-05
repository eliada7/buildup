const inputElement = document.querySelector('#input');
const btnElement = document.querySelector('#submit');
const imgsElement = document.querySelectorAll('.poster1');
const h4Element = document.querySelectorAll('.title');
const searchDuration = document.querySelectorAll('.searchduration');
const searchScore = document.querySelectorAll('.searchscore');


fetch('https://api.jikan.moe/v4/anime?q='+inputElement.value)
.then((response)=> {
    console.log(response);
    return response.json();
})
.then ((data)=>{
    console.log(data);
    for(let index=0;index<4;index++){
        console.log(data[index]);
        imgsElement[index].src=data.data[index].images.jpg.image_url
        h4Element[index].textContent= data.data[index].title
        searchDuration[index].textContent=data.data[index].duration
        searchScore[index].textContent =data.data[index].score

    }
});

btnElement.addEventListener('click',function(){
    fetch('https://api.jikan.moe/v4/anime?q='+inputElement.value)
.then((response)=> {
    console.log(response);
    return response.json();
})
.then ((data)=>{
    console.log(data);
    for(let index=0;index<4;index++){
        console.log(data[index]);
        imgsElement[index].src=data.data[index].images.jpg.image_url
        h4Element[index].textContent= data.data[index].title
        searchDuration[index].textContent=data.data[index].duration
        searchScore[index].textContent =data.data[index].score

    }
});



    

})


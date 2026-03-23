const links = document.querySelectorAll(".nav-link");
toggle = document.getElementById("darkToggle");

links.forEach(link=>{

link.addEventListener('click',()=>{


    links.forEach(li=>{li.classList.remove('active')});


    link.classList.add('active')



})


})

toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})





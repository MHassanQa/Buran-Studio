// 0

var observer0 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".observer")[0].classList.add("fadein");
            
            
           
        }
       
    })
})

observer0.observe(document.querySelector(".observer-master0"));

//1

var observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".observer")[1].classList.add("fadein");
            
            
           
        }
       
    })
})

observer1.observe(document.querySelector(".observer-master1"));

//2
var observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".observer")[2].classList.add("fadein");
            
            
           
        }
       
    })
})

observer2.observe(document.querySelector(".observer-master2"));

//3
var observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".observer")[3].classList.add("fadein");
            
            
           
        }
       
    })
})

observer3.observe(document.querySelector(".observer-master3"));

//4

var observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".observer")[4].classList.add("fadein");
            
            
           
        }
       
    })
})

observer4.observe(document.querySelector(".observer-master4"));



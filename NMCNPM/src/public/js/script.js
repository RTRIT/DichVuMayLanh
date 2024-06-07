// ADMIN PANEL
//1. Toggle button
const tog1 = document.querySelector("#toggle-btn");
tog1.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("expand");
})



// document.addEventListener("DOMContentLoaded", function(){
//     alert("testing");
//     console.log("testing2");
//     const serviceLink = document.querySelectorAll(".service-link");
//     console.log(serviceLink)
//     alert("testing")
//     //const serviceDetail = req.params.serviceDetail;
//     //alert(`user slug: ${serviceDetail}`)

//     serviceLink.forEach((link) => {
//         link.addEventListener("click", function(event){
//             console.log(event.target.alert)
//             alert("Get in to alert");
//         })

//     })

// })
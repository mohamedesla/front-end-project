

document.getElementById("demo").addEventListener("click", function(){

document.getElementById("menu-mobile").classList.toggle("out")
document.getElementById("demo").classList.toggle("m-25")

})

/*$("ul li a").click((event)=>{
    event.preventDefault();
    $.get(event.target.href , (data , status )=>{
        $("#page").html(data);
        console.log(data)
    })
})*/
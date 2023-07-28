const next_arrow_containers = document.querySelectorAll(".next_arrow_container");
let arrow_id, link;

next_arrow_containers.forEach((next_arrow_container)=>{
    next_arrow_container.addEventListener("click", () =>{
        arrow_id = "a" + next_arrow_container.id[next_arrow_container.id.length - 1];
        
        if(document.getElementById(arrow_id))
        {
            link = document.getElementById(arrow_id).href;
            location.href = link;
        }
    })
})
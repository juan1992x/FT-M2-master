//lista 

$("#boton").click(() => {
    var listaAmigos = $("#lista");
    listaAmigos.empty(); 
    $.get("http://localhost:5000/amigos", data => {
        for (let i = 0; i < data.length; i++) {
            listaAmigos.append(`<li>${data[i].name}</li>`)            
            
        }
    })
});

// busqueda
$("#search").click(() =>{
    var id = $("#input").val();
    var array = [1,2,3,4,5,6,7];
    if(id in array){
        $.get(`http://localhost:5000/amigos/${id}`, data =>{
            $("#amigo").text(data.name);
        
        })
    }else{
        $("#amigo").text("el amigo no existe")
    }
})
// eliminacion 

$("#delete").click(() => {
    var id = $("#inputdelete").val()
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type :"DELETE",
        succes: () => {
            $("#succes").text("el amigo fue borrado")
        }
    })
})
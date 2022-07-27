
$("#add_owner").submit(function(event){
    alert("Data inserted");
})


$("#update_owner").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url" : `http://localhost:5000/api/owners/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:5000/api/owners/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted");
                location.reload();
            })
        }

    })
}
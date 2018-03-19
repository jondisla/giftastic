

    var catArray = ['Lancer', 'Subaru', 'Ferrari', 'BMW', 'Honda', 'Volkswagon', 'Mazda']

    var newButtons;

//     function addBrand(){
//     for(var i = 0; i < catArray.length; i++){
    
//     newButtons = $('.card-body').prepend('<button id=buttons class="btn btn-primary">' + catArray[i])}

//     $('#type').keyup(function(){
//         var userInput = $('#type').val()
//         console.log(userInput.toLowerCase())

//     $('.btn-danger').click(function(){
//         $('#buttons').append(userInput)
//     })

// })}
    function getData(){
    
    // var userInput = $('#searchtext').val()
    var userInput = $('#searchtext').val()

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=lj5JtcnVU0ydCVDeb7Y7pj7m3ZyfY3k4";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        for (i in response.data){
            $('#test').append("<img src='"+response.data[i].images.original.url+"'style='margin-left:56px;margin-top:30px;height:250px; width:450px; opacity:1'/>")
        }

    });
    
}
    
    // addBrand()


getData()
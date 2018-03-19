$(function(){
    console.log('Ready');

    var catArray = ['Lancer', 'Subaru', 'Ferrari', 'BMW', 'Honda', 'Volkswagon', 'Mazda']

    var newButtons;
    
    function addBrand(){
    for(var i = 0; i < catArray.length; i++){
    
    newButtons = $('.card-body').append('<button id=buttons class="btn btn-primary">' + catArray[i])}

    $('#type').keyup(function(){
        var userInput = $('#type').val()
        console.log(userInput.toLowerCase())

    $('.btn-danger').click(function(){
        $('#buttons').append(userInput)
    })

})}
    
    
    
    addBrand()
});
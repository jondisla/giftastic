var carArray = ['MCLAREN', 'SUBARU', 'FERRARI', 'BMW', 'BUGATTI', 'JAGUAR MOTORS'];
      var aprvdArray = [ ]

      // display function re-renders the HTML to display the appropriate content
      function displayCarInfo() {

        var userInput = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=lj5JtcnVU0ydCVDeb7Y7pj7m3ZyfY3k4&limit=10&offset=0&rating=PG&lang=en";
        

        // Creating an AJAX call for the specific userInput button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response)

          // Creating a div to hold the userInput
          var carDiv = $("<div class='userInput'>");
            $("#carArray-view").empty()

            for (i in response.data){
          // Retrieving the URL for the image
          var imgURL = response.data[i].images.original.url;

          // Creating an element to hold the image
          var image = $("<img class=img-fluid alt=Responsive image style= margin-left:56px;margin-top:30px;height:250px; width:450px; opacity:1>").attr("src", imgURL );
            
          // Appending the image
          carDiv.append(image);

          // Putting the entire userInput above the previous carArray
          $("#carArray-view").append(carDiv);
          console.log(carDiv)}
        });

      }
      
      // Function for displaying userInput data
      function renderButtons() {

        // Deleting the carArray prior to adding new carArray
        // (this is necessary otherwise you will have repeat buttons)
        $("#gifButton").empty();

        // Looping through the array of carArray
        for (var i = 0; i < carArray.length; i++) {

          // Then dynamicaly generating buttons for each userInput in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $('<button id="buttons" class="btn btn-primary" style="margin-left:5px;margin-bottom:5px">');
          // Adding a class of userInput-btn to our button
          a.addClass("userInput-btn");
          // Adding a data-attribute
          a.attr("data-name", carArray[i]);
          // Providing the initial button text
          a.text(carArray[i]);
          // Adding the button to the gifButton div
          $("#gifButton").append(a);
        }
      }
      
    
    

      // This function handles events where a userInput button is clicked
      $("#btnSearch").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox

        var userInput = $("#searchtext").val().trim().toLowerCase();
      

        if(userInput === 'honda' || userInput === 'jeep'|| userInput === 'mitsubishi'|| userInput === 'hyundai'|| userInput === 'volkswagon'||userInput ===  'toyota'||userInput ===  'fiat'||userInput ===  'mazda'||userInput ===  'gmc'||userInput ===  'audi'||userInput ===  'cadillac'||userInput ===  'ford'||userInput ===  'lincoln'||userInput ===  'chevrolet'||userInput ===  'chevy'||userInput ===  'chrysler'||userInput ===  'buick'||userInput ===  'tesla'||userInput ===  'pontiac'||userInput ===  'dodge'||userInput ===  'acura'||userInput ===  'infiniti'||userInput ===  'lexus'||userInput ===  'isuzu'||userInput ===  'suzuki'||userInput ===  'nissan'||userInput ===  'cobra'||userInput ===  'hyundai'||userInput ===  'kia'||userInput ===  'renault'||userInput ===  'volvo'||userInput ===  'saab'||userInput ===  'lotus'||userInput ===  'mini'||userInput ===  'mini cooper'||userInput ===  'rolls royce'||userInput ===  'land rover'||userInput ===  'lamborghini'||userInput ===  'aston martin'){
        console.log('Working...')
          }else{
            alert('Try again')
          location.reload()
          }

        // Adding userInput from the textbox to our array
        carArray.push(userInput.toUpperCase());

        // Calling renderButtons which handles the processing of our userInput array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "userInput-btn"
      $(document).on("click", ".userInput-btn", displayCarInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
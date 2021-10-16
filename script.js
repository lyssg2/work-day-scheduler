 // Displays current day on top of page
 $('#currentDay').text(moment().format('dddd, MMMM Do'));

 // Main scheduler function
 $(document).ready(function() {
     // Listens for click on the save button
     $('.saveBtn').on('click', function() {
         // When clicked, grabs value from description during said time-block
         var value = $(this).siblings('.description').val();
         var time = $(this).parent().attr('id');

         // Saves user's description and time in local storage
         localStorage.setItem(time, value);
     });

     function hourUpdater() {
         // Retrieves current hours from above
         var currentHour = moment().hours();

         // loop over time blocks
         $('.time-block').each(function() {
             var blockHour = parseInt($(this).attr('id').split('-')[1]);

             // Checks time
             // If time is past current hour, displays past class (opacity&color)
             if (blockHour < currentHour) {
                 $(this).addClass('past');
                 // If time is current hour, displays current class (color), removes past
             } else if (blockHour === currentHour) {
                 $(this).removeClass('past');
                 $(this).addClass('present');
                 // If it is future hours, removes past and present and displays future (color)
             } else {
                 $(this).removeClass('past');
                 $(this).removeClass('present');
                 $(this).addClass('future');
             }
         });
     }

     // set up interval to check if current time needs to be updated every 10 seconds
     var interval = setInterval(hourUpdater, 1000);

     hourUpdater();

     // grabs saved data from localStorage
     $('#hour-9 .description').val(localStorage.getItem('hour-9'));
     $('#hour-10 .description').val(localStorage.getItem('hour-10'));
     $('#hour-11 .description').val(localStorage.getItem('hour-11'));
     $('#hour-12 .description').val(localStorage.getItem('hour-12'));
     $('#hour-13 .description').val(localStorage.getItem('hour-13'));
     $('#hour-14 .description').val(localStorage.getItem('hour-14'));
     $('#hour-15 .description').val(localStorage.getItem('hour-15'));
     $('#hour-16 .description').val(localStorage.getItem('hour-16'));
     $('#hour-17 .description').val(localStorage.getItem('hour-17'));
 });
$(document).ready(function() {
  
  $('#generate').click(function(){
    $('#command_line').val("ffmpeg" + 
      " -i " + $('#input_name').val() + 
      " -o " + $('#output_name').val())
  });

  $('#display_generate').click(function(){
    $('#display_command_line').val("ffmpeg" + 
      " -i " + $('#input_name').val())
  });

});
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-shreded").on("click", function(event) {
      var id = $(this).data("id");
      var newShreded = $(this).data("newshreded");
      console.log("newshreded", newShreded);
  
      var newShrededState = {
        shred: newShreded
      };
  
      // Send the PUT request.
      $.ajax("/api/mountains/" + id, {
        type: "PUT",
        data: newShrededState
      }).then(
        function() {
          console.log("changed shreded to", newShreded);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newMountain = {
        mountain_name: $("#ca").val().trim(),
        shred: $("[name=shred]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/mountains", {
        type: "POST",
        data: newMountain
      }).then(
        function() {
          console.log("created new mountain");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
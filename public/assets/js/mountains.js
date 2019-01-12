// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-shredded").on("click", function(event) {
      var id = $(this).data("id");
      var newShredded = $(this).data("newshredded");
      console.log("newshredded", newShredded);
  
      var newShreddedState = {
        shred: newShredded
      };
  
      // Send the PUT request.
      $.ajax("/api/mountains/" + id, {
        type: "PUT",
        data: newShreddedState
      }).then(
        function() {
          console.log("changed shredded to", newShredded);
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
    $(".delete-mountain").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/mountains/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted mountain", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
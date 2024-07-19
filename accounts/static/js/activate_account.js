<script>
 document.getElementById('maxButton').addEventListener('click', function() {
    document.getElementById('depositAmount').value = 5.7; // Set this to the current balance
  });

  document.getElementById('depositForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = '{% url "activated_successfully" %}'; // Redirect to the desired URL
  });
</script>

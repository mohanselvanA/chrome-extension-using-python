document.getElementById('fetchData').addEventListener('click', function() {
    fetch('http://localhost:8000/api/data/')
      .then(response => response.json())
      .then(data => {
        document.getElementById('data').textContent = data.message;
      })
      .catch(error => console.error('Error:', error));
  });
  
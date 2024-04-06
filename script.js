function agregarPersona() {
    var nombre = document.getElementById('nombre').value;
    var deuda = document.getElementById('deuda').value;
  
    if (nombre !== '' && deuda !== '') {
      var tbody = document.getElementById('tbody');
      var row = tbody.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
  
      cell1.innerHTML = nombre;
      cell2.innerHTML = '$' + deuda;
  
      document.getElementById('nombre').value = '';
      document.getElementById('deuda').value = '';
    } else {
      alert('Por favor ingrese nombre y deuda.');
    }
  }
  
      function submitForm() {
	// Obtener todos los elementos de entrada de la clase 'input-checkbox'
	const checkboxes = document.querySelectorAll('.input-checkbox');

	// Crear una lista vacía para almacenar los valores seleccionados
	const selectedValues = [];

	// Iterar sobre todos los elementos de entrada y agregar los valores seleccionados a la lista
	for (let i = 0; i < checkboxes.length; i++) {
	  if (checkboxes[i].checked) {
	    selectedValues.push(checkboxes[i].value);
	  }
	}

	// Agregar la lista de valores seleccionados como un campo oculto en el formulario
	const hiddenField = document.createElement('input');
	hiddenField.setAttribute('type', 'hidden');
	hiddenField.setAttribute('name', 'skills');
	hiddenField.setAttribute('value', selectedValues.join(', '));
	document.getElementById('survey-form').appendChild(hiddenField);

	//Mostrar mensadaje de agradecimiento
	showThankYouMessage();

	function showThankYouMessage() {
	  alert("Thank you for completing the form. Now you will be redirect to my portfolio");
	}
	// Enviar el formulario
	document.getElementById('survey-form').submit();

      }


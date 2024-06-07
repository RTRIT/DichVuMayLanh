
document.addEventListener('DOMContentLoaded', function(event) {
    const selectElement = document.getElementById('services');
    const resultElement = document.getElementById('selected-services');
    const formElement = document.getElementById('reg-form')
    const selectedServices = new Set();
    

    selectElement.addEventListener('change', function(event){
        console.log(selectedServices)

        var selectedOption = event.target.value;
        if(!selectedServices.has(selectedOption)){
            selectedServices.add(selectedOption);
            // create a `div` element has class name 'service-item'
            var serviceItem = document.createElement('div');
            serviceItem.classList.add('service-item');
            // serviceItem.style.cssText = 'background-color: #77f0f0; padding: 5px 10px; border-radius: 20px; display: flex; align-items: center;';

            // create a `p` element has content of selected service 
            var serviceText = document.createElement('p');
            serviceText.textContent = selectedOption;
            serviceItem.appendChild(serviceText);

            // create a `i` element contains lineicon 
            var removeIcon = document.createElement('i');
            removeIcon.classList.add('lni', 'lni-cross-circle');
            // removeIcon.style.cssText = 'margin-left: 10px; cursor: pointer;';
            // Listening click event
            removeIcon.addEventListener('click', function() {
                resultElement.removeChild(serviceItem);
                formElement.removeChild(hiddenInput);
                selectedServices.delete(selectedOption);
            });

            serviceItem.appendChild(removeIcon);
            resultElement.appendChild(serviceItem);

            // hidden input for sending list of servives used
            var hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.name = 'selected_services[]';
            hiddenInput.value = selectedOption;
            formElement.appendChild(hiddenInput);

        }
        
    });
});
document.addEventListener('DOMContentLoaded', function(event) {
    const selectElement = document.getElementById('services');
    const resultElement = document.getElementById('selected-services');
    const formElement = document.getElementById('reg-form');
    const selectedServices = new Set();
    
    selectElement.addEventListener('change', function(event){
        var selectedOption = event.target.value;
        var selectedOption2 = event.target.selectedOptions[0].textContent;
        if(!selectedServices.has(selectedOption)){
            selectedServices.add(selectedOption);

            // create a `div` element with class name 'service-item'
            var serviceItem = document.createElement('div');
            serviceItem.classList.add('service-item', 'row');
            
            // create a `p` element with the content of the selected service 
            var serviceText = document.createElement('p');
            serviceText.textContent = selectedOption2;
            serviceText.classList.add('col-7');
            serviceItem.appendChild(serviceText);

            // create quantity controls
            var quantity = document.createElement('div');
            quantity.classList.add('quantity', 'col-3');

            var decrease = document.createElement('span');
            decrease.classList.add('decrease');
            var increase = document.createElement('span');
            increase.classList.add('increase');

            var minusIcon = document.createElement('i');
            minusIcon.classList.add('lni', 'lni-minus');
            var plusIcon = document.createElement('i');
            plusIcon.classList.add('lni', 'lni-plus');
            decrease.appendChild(minusIcon);
            increase.appendChild(plusIcon);

            var cnt = document.createElement('input');
            cnt.type = 'tel';
            cnt.name = 'tel';
            cnt.id = 'tel';
            cnt.value = '1';

            quantity.appendChild(decrease);
            quantity.appendChild(cnt);
            quantity.appendChild(increase);
            serviceItem.appendChild(quantity);

            // create a `i` element that contains the lineicon 
            var removeIcon = document.createElement('i');
            removeIcon.classList.add('col-2', 'lni', 'lni-cross-circle');

            // add icon into the selected service
            serviceItem.appendChild(removeIcon);
            resultElement.appendChild(serviceItem);

            // hidden input for sending list of services used
            var hiddenInput = document.createElement('input');
            hiddenInput.at
            hiddenInput.type = 'hidden';
            hiddenInput.name = 'CTPYC[]';
            hiddenInput.value = `${selectedOption}:${cnt.value}` ;
            
            formElement.appendChild(hiddenInput);

            // LISTENING CLICK EVENT
            // On minus icon and on plus icon
            decrease.addEventListener("click", function() {
                let currentValue = parseInt(cnt.value);
                if (currentValue > 1) {
                    cnt.value = currentValue - 1;
                    updateHiddenInput();
                }
            });

            increase.addEventListener("click", function() {
                let currentValue = parseInt(cnt.value);
                cnt.value = currentValue + 1;
                updateHiddenInput();
            });

            // On Cross icon
            removeIcon.addEventListener('click', function() {
                resultElement.removeChild(serviceItem);
                formElement.removeChild(hiddenInput);
                selectedServices.delete(selectedOption);
            });

            // Update hidden input value when quantity changes
            cnt.addEventListener('input', updateHiddenInput);

            function updateHiddenInput() {
                hiddenInput.value = `${selectedOption}:${cnt.value}` ; ;
            }
        }
    });
});

let selectedService = '';

function selectService(service) {
    selectedService = service;
    document.getElementById('selected-service').textContent = service;
    document.getElementById('booking-form').style.display = 'block';
    document.getElementById('confirmation').style.display = 'none';
}

function confirmBooking(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (selectedService && date && time) {
        const confirmationDetails = `Serviço: ${selectedService}<br>Data: ${date}<br>Horário: ${time}`;
        document.getElementById('confirmation-details').innerHTML = confirmationDetails;

        document.getElementById('booking-form').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
    }
}

function newBooking() {
    document.getElementById('form').reset();
    document.getElementById('booking-form').style.display = 'block';
    document.getElementById('confirmation').style.display = 'none';
}

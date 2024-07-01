document.addEventListener('DOMContentLoaded', () => {
    // Mock data for appointments
    const appointments = [
        {
            id: 1,
            name: 'Nikhil Raj',
            mobile: '7488913928',
            email: 'johndoe@example.com',
            price: '$1200/month'
        },
        {
            id: 2,
            name: 'Jane Smith',
            mobile: '987-654-3210',
            email: 'janesmith@example.com',
            price: '$1500/month'
        }
    ];

    const appointmentsContainer = document.getElementById('appointments');
    appointments.forEach(appointment => {
        const appointmentBox = document.createElement('div');
        appointmentBox.classList.add('appointment');
        appointmentBox.innerHTML = `
            <p>Name: ${appointment.name}</p>
            <p>Mobile: ${appointment.mobile}</p>
            <p>Email: ${appointment.email}</p>
            <p>Price: ${appointment.price}</p>
            <div class="buttons">
                <button class="accept" onclick="acceptAppointment(${appointment.id})">Accept</button>
                <button class="delay" onclick="delayAppointment(${appointment.id})">Delay</button>
            </div>
        `;
        appointmentsContainer.appendChild(appointmentBox);
    });
});

function acceptAppointment(id) {
    alert(`Appointment ${id} accepted`);
    // Implement accept functionality (e.g., API call)
}

function delayAppointment(id) {
    alert(`Appointment ${id} delayed`);
    // Implement delay functionality (e.g., API call)
}

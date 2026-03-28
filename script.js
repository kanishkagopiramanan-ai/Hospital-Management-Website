let appointments = [];

function bookAppointment() {
    let patientName = document.querySelector('input[name="patient"]').value.trim();
    let doctorName = document.querySelector('input[name="doctor"]').value.trim();
    let appointmentDate = document.querySelector('input[name="date"]').value;
    let appointmentTime = document.querySelector('input[name="time"]').value;

    // Basic validation
    if(patientName === "" || doctorName === "" || appointmentDate === "" || appointmentTime === "") {
        alert("Please fill all fields!");
        return false;
    }

    if(!/^[a-zA-Z ]+$/.test(patientName) || !/^[a-zA-Z ]+$/.test(doctorName)) {
        alert("Names should contain only letters!");
        return false;
    }

    // Store appointment
    let newAppointment = {
        patient: patientName,
        doctor: doctorName,
        date: appointmentDate,
        time: appointmentTime
    };
    appointments.push(newAppointment);

    // Show all booked appointments
    let display = document.getElementById("appointmentDisplay");
    display.innerHTML = "";
    for (let appt of appointments) {
        display.innerHTML += `<p>✅ ${appt.patient} with Dr. ${appt.doctor} on ${appt.date} at ${appt.time}</p>`;
    }

    // Show receipt for latest appointment
    let receipt = document.getElementById("appointmentReceipt");
    receipt.innerHTML = `
        <h4>Appointment Receipt</h4>
        <p><strong>Patient Name:</strong> ${patientName}</p>
        <p><strong>Doctor Name:</strong> Dr. ${doctorName}</p>
        <p><strong>Date:</strong> ${appointmentDate}</p>
        <p><strong>Time:</strong> ${appointmentTime}</p>
        <p>✅ Your appointment has been successfully booked!</p>
    `;

    // Success alert
    alert("Appointment booked successfully!");

    // Reset form
    document.querySelector("form").reset();
    return true;
}

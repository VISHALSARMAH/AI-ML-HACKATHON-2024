document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchBar = document.querySelector('.search-bar');
    const patientList = document.getElementById('patient-list');

    // Sample patient data with dates
    const patients = [
        { id: 1, name: 'Monu', country: 'India', gender: 'Male', age: '27yr', heartRate: '77 BPM', respiratoryRate: '100 BPM', image: 'random_person_by_vurtov_d2nqynw-fullview.jpg', date: '2024-07-16' },
        { id: 2, name: 'Aarti', country: 'India', gender: 'Female', age: '30yr', heartRate: '80 BPM', respiratoryRate: '95 BPM', image: 'random_person_by_vurtov_d2nqynw-fullview.jpg', date: '2024-07-15' },
        { id: 3, name: 'Raj', country: 'India', gender: 'Male', age: '45yr', heartRate: '72 BPM', respiratoryRate: '85 BPM', image: 'random_person_by_vurtov_d2nqynw-fullview.jpg', date: '2024-07-14' },
        { id: 4, name: 'Nisha', country: 'India', gender: 'Female', age: '35yr', heartRate: '88 BPM', respiratoryRate: '90 BPM', image: 'random_person_by_vurtov_d2nqynw-fullview.jpg', date: '2024-07-13' },
        { id: 5, name: 'Anil', country: 'India', gender: 'Male', age: '50yr', heartRate: '76 BPM', respiratoryRate: '78 BPM', image: 'random_person_by_vurtov_d2nqynw-fullview.jpg', date: '2024-07-12' },
        { id: 6, name: 'Sita', country: 'India', gender: 'Female', age: '29yr', heartRate: '70 BPM', respiratoryRate: '82 BPM', image: 'random_person_by_vurtov_d2nqynw-fullview.jpg', date: '2024-07-11' },
        { id: 7, name: 'Pawan', country: 'India', gender: 'Male', age: '38yr', heartRate: '84 BPM', respiratoryRate: '87 BPM', image: 'random_person_by_vurtov_d2nqynw-fullview.jpg', date: '2024-07-10' },
        { id: 8, name: 'Lata', country: 'India', gender: 'Female', age: '40yr', heartRate: '79 BPM', respiratoryRate: '80 BPM', image: 'random_person_by_vurtov_d2nqynw-fullview.jpg', date: '2024-07-09' },
        { id: 9, name: 'Vikram', country: 'India', gender: 'Male', age: '33yr', heartRate: '81 BPM', respiratoryRate: '84 BPM', image: 'random_person_by_vurtov_d2nqynw-fullview.jpg', date: '2024-07-08' },
        { id: 10, name: 'Mina', country: 'India', gender: 'Female', age: '26yr', heartRate: '75 BPM', respiratoryRate: '89 BPM', image: 'random_person_by_vurtov_d2nqynw-fullview.jpg', date: '2024-07-07' }
    ];

    function displayPatients(filteredPatients) {
        patientList.innerHTML = '';
        filteredPatients.forEach(patient => {
            const patientCard = document.createElement('div');
            patientCard.className = 'patientid';
            patientCard.innerHTML = `
                <div class="id1">
                    <img src="${patient.image}" alt="Patient Image" class="patient-image">
                    <p><strong>Patient ID:</strong> ${patient.id}</p>
                    <p><strong>Name:</strong> ${patient.name}</p>
                    <p><strong>Country:</strong> ${patient.country}</p>
                    <p><strong>Gender:</strong> <span class="bold-gender">${patient.gender}</span></p>
                    <p><strong>Age:</strong> ${patient.age}</p>
                    <p><strong>Date:</strong> ${patient.date}</p>
                    <div class="health-info">
                        <img src="heart-rating-svgrepo-com.svg" alt="Heart Rate">
                        <p>${patient.heartRate}</p>
                    </div>
                    <div class="health-info">
                        <img src="lungs-svgrepo-com.svg" alt="Respiratory Rate">
                        <p>${patient.respiratoryRate}</p>
                    </div>
                </div>
            `;
            patientList.appendChild(patientCard);
        });
    }

    function searchPatients(query) {
        const lowerCaseQuery = query.toLowerCase();
        const filteredPatients = patients.filter(patient =>
            patient.name.toLowerCase().includes(lowerCaseQuery) ||
            patient.id.toString().includes(lowerCaseQuery)
        );
        displayPatients(filteredPatients);
    }

    searchBar.addEventListener('input', function() {
        searchPatients(searchBar.value);
    });

    // Display all patients initially
    displayPatients(patients);
});

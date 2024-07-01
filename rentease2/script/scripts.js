document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profile-icon');
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');
    const addPropertyBtn = document.getElementById('add-property-btn');

    profileIcon.addEventListener('click', () => {
        window.location.href = 'profile.html';
    });

    menuBtn.addEventListener('click', () => {
        sidebar.classList.remove('hidden');
        sidebar.classList.add('sidebar-visible');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('sidebar-visible');
    });

    document.getElementById('logout-link').addEventListener('click', () => {
        alert('Logged out'); 
    });

    addPropertyBtn.addEventListener('click', () => {
        window.location.href = 'add-property.html';
    });

    const properties = [
        {
            id: 1,
            image: 'media/images/property1.jpeg',
            description: 'Spacious apartment in the city center',
            address: '123 Main St, Cityville',
            price: '$1200/month'
        },
        {
            id: 2,
            image: 'media/images/property2.jpeg',
            description: 'Modern condo with all amenities',
            address: '456 Elm St, Townsville',
            price: '$1500/month'
        },
        {
            id: 3,
            image: 'media/images/property3.jpeg',
            description: 'Cozy home in a quiet neighborhood',
            address: '789 Oak St, Suburbia',
            price: '$1000/month'
        }
		
    ];

    const propertiesContainer = document.getElementById('properties');

    properties.forEach(property => {
        const propertyBox = document.createElement('div');
        propertyBox.classList.add('property');
        propertyBox.innerHTML = `
            <img src="${property.image}" alt="${property.description}">
            <div class="buttons">
                <button class="update" onclick="window.location.href='update-property.html?id=${property.id}'">Update</button>
                <button class="delete" onclick="deleteProperty(${property.id})">Delete</button>
            </div>
        `;
        propertiesContainer.appendChild(propertyBox);
    });
});

function deleteProperty(id) {
    if (confirm('Are you sure you want to delete this property?')) {
        alert(`Property ${id} deleted`);
        location.reload();
    }
}

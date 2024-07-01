document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profile-icon');  
    const profilePicInput = document.getElementById('profile-pic-input');
    const profilePic = document.getElementById('profile-pic');

    profileIcon.addEventListener('click', () => {
        window.location.href = 'profile.html';
    });

 
    profilePicInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
        }
        reader.readAsDataURL(file);
    });

    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Profile updated successfully!');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const achievements = [
        "Filed a patent on our innovative treatment method.",
        "Developed a prototype for our new healthcare technology.",
        "Created a dedicated app and website to enhance patient access and engagement.",
        "Planning to expand our services globally to reach more patients.",
        "We provide three essential services: Doorstep booking, Video calling, and Offline hospital booking."
    ];

    const achievementsList = document.getElementById('achievements-list');

    achievements.forEach(achievement => {
        const listItem = document.createElement('li');
        listItem.textContent = achievement;
        achievementsList.appendChild(listItem);
    });
});

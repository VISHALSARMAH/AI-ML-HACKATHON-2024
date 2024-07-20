document.addEventListener('DOMContentLoaded', () => {
    const reviews = [
        {
            name: "John Doe",
            date: "July 10, 2024",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            review: "Excellent service! Highly recommend to anyone looking for quality and professionalism."
        },
        {
            name: "Jane Smith",
            date: "June 25, 2024",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            review: "The team was very friendly and accommodating. I am very pleased with the service provided."
        },
        {
            name: "Sam Wilson",
            date: "May 15, 2024",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
            review: "Outstanding experience from start to finish. The attention to detail was impeccable."
        },
        {
            name: "Lucy Brown",
            date: "April 30, 2024",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
            review: "I couldn't be happier with the results. The staff went above and beyond to ensure my satisfaction."
        },
        {
            name: "Michael Johnson",
            date: "March 20, 2024",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
            review: "Professional and efficient service. Will definitely use again in the future."
        },
        {
            name: "Emily Davis",
            date: "February 10, 2024",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
            review: "Wonderful experience! The team was knowledgeable and helpful throughout the process."
        }
    ];

    const reviewsContainer = document.getElementById('reviews');

    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        reviewCard.innerHTML = `
            <div class="review-header">
                <img src="${review.avatar}" alt="${review.name}">
                <div>
                    <h3>${review.name}</h3>
                    <span>${review.date}</span>
                </div>
            </div>
            <div class="review-body">
                <p>${review.review}</p>
            </div>
        `;

        reviewsContainer.appendChild(reviewCard);
    });
});

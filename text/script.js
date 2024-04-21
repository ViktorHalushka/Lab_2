const scrollButton = document.getElementById('scrollButton');

            scrollButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

/////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('subscriptionModal');
    const acceptButton = document.getElementById('acceptSubscription');
    const rejectButton = document.getElementById('rejectSubscription');
    const closeButton = document.querySelector('.close-popup');

    // Show the modal after a delay (e.g., 10 seconds)
    setTimeout(() => {
        modal.style.display = 'block';
    }, 10000);

    // Hide the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Hide the modal and store the user's decision in localStorage
    function handleUserDecision(decision) {
        modal.style.display = 'none';
        localStorage.setItem('subscriptionDecision', decision);
    }

    // Handle the "Accept" button click
    acceptButton.addEventListener('click', function () {
        handleUserDecision('accepted');
        // You can also show a thank you message here if needed
    });

    // Handle the "Reject" button click
    rejectButton.addEventListener('click', function () {
        handleUserDecision('rejected');
        // You can also show a different message here if needed
    });
});
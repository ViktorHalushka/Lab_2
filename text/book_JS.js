let images = [
    {description: 'Опис 1', title: 'Однокімнатні апартаменти' ,url: '/images/image_1.jpg' },
    {description: 'Опис 1', title: 'Двокімнатні апартаменти' , url: '/images/image_2.png' },
    {description: 'Опис 1', title: 'Трьокімнатні апартаменти' , url: '/images/Трьокімнатні апартаменти.png' },
    {description: 'Опис 1', title: 'Будиночок' , url: '/images/Будиночок.png' },

];


function createImageElement(image) {
    let img = document.createElement('img');
    img.src = image.url;
        
    let description = document.createElement('p');
    description.textContent = image.description;

    
    let title = document.createElement('h2');
    title.textContent = image.title;

    img.addEventListener('click', function() {
        description.style.display = description.style.display === 'none' ? 'block' : 'none';
    });

    let container = document.createElement('div');
    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    

    return container;
}

window.addEventListener('DOMContentLoaded', function() {
    let imageContainer = document.getElementById('imageContainer');

    images.forEach(function(image) {
        let imageElement = createImageElement(image);
        imageContainer.appendChild(imageElement);
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('DOMContentLoaded', function() {
    let imageContainer = document.getElementById('imageContainer');
    let oneBedroomBtn = document.getElementById('oneBedroomBtn');
    let twoBedroomBtn = document.getElementById('twoBedroomBtn');
    let threeBedroomBtn = document.getElementById('threeBedroomBtn');
    let houseBtn = document.getElementById('houseBtn');
    let showAllBtn = document.getElementById('showAllBtn'); 

    function filterImages(type) {
        while (imageContainer.firstChild) {
            imageContainer.removeChild(imageContainer.firstChild);
        }
        images.forEach(function(image) {
            if (image.title.includes(type)) {
                let imageElement = createImageElement(image);
                imageContainer.appendChild(imageElement);
            }
        });
    }

    oneBedroomBtn.addEventListener('click', function() {
        filterImages('Однокімнатні');
    });

    twoBedroomBtn.addEventListener('click', function() {
        filterImages('Двокімнатні');
    });

    threeBedroomBtn.addEventListener('click', function() {
        filterImages('Трьокімнатні');
    });

    houseBtn.addEventListener('click', function() {
        filterImages('Будиночок');
    });

});

function showAllImages() {
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
    images.forEach(function(image) {
        let imageElement = createImageElement(image);
        imageContainer.appendChild(imageElement);
    });
}

showAllBtn.addEventListener('click', function() {
    showAllImages();
});

showAllImages();


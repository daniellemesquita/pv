document.addEventListener('DOMContentLoaded', function () {
    fetch('ebook-info.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#title').innerText = data.title;
            document.querySelector('#description').innerText = data.description;
            document.querySelector('#price').innerText = `R$ ${data.price}`;
            document.querySelector('#currency').innerText = data.currency;

            let featuresList = document.querySelector('#features');
            data.features.forEach(feature => {
                let li = document.createElement('li');
                li.innerText = feature;
                featuresList.appendChild(li);
            });

            let testimonialsList = document.querySelector('#testimonials');
            data.testimonials.forEach(testimonial => {
                let div = document.createElement('div');
                div.classList.add('testimonial');
                div.innerHTML = `<p>"${testimonial.testimonial}" - ${testimonial.name}, ${testimonial.occupation}</p>`;
                testimonialsList.appendChild(div);
            });

            let bonusList = document.querySelector('#bonus');
            data.bonus.forEach(bonus => {
                let li = document.createElement('li');
                li.innerText = bonus;
                bonusList.appendChild(li);
            });

            document.querySelector('#guaranteeText').innerText = data.guarantee;
        });
    
    document.querySelector('#purchaseButton').addEventListener('click', function() {
        window.location.href = 'https://universosecreto.com'; // Replace with your actual purchase page URL
    });
});

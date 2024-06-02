document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    alert(`Nama: ${name}\nEmail: ${email}\nPesan: ${message}\n\nTerima kasih telah menghubungi kami!`);
});

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        fetch("http://localhost/info2180-lab4/superheroes.php") 
            .then(response => {
                 return response.text(); 
            })
            .then(htmlContent => {
                alert(htmlContent);
            })
        
    });
});

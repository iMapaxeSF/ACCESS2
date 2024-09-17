document.getElementById('keywordForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const MyLittlePony = 'mylittlepony';
    const googleMapsCoords = '33°56\'51.7"N 118°24\'19.8"W'; 
    const imageContainer = document.getElementById('imageContainer');
    const formContainer = document.getElementById('formContainer');
    const backgroundBox = document.getElementById('backgroundBox');
    const clickArea = document.getElementById('clickArea');
    const errorMessage = document.getElementById('errorMessage');

    if (keyword === MyLittlePony) {
        formContainer.style.display = 'none'; 
        backgroundBox.style.display = 'none'; 
        errorMessage.textContent = ''; 
        setTimeout(() => {
            imageContainer.style.display = 'flex'; 
            clickArea.style.display = 'block'; 
        }, 1500); 
    } else if (keyword === googleMapsCoords.toLowerCase()) {
        document.getElementById('textOverlay').style.display = 'block'; 
        setTimeout(() => {
            document.getElementById('textOverlay').style.display = 'none'; 
            window.location.href = `https://www.google.com/maps?q=${encodeURIComponent(googleMapsCoords)}`; 
        }, 100);
    } else {
        errorMessage.textContent = '"Palabra" incorrecta. Inténtalo de nuevo, no seas desgraciado/a <--';
    }
});

document.getElementById('clickArea').addEventListener('click', function () {
    document.getElementById('imageContainer').classList.add('blurred'); 
    document.getElementById('overlay').style.display = 'flex'; 
});

document.getElementById('popupInput').addEventListener('input', function () {
    const input = this.value.toLowerCase();
    if (input === 'luna') {
        document.getElementById('textOverlay').textContent = 'MLP T9 CAP ?';
        document.getElementById('textOverlay').style.display = 'block'; 
        setTimeout(() => {
            document.getElementById('overlay').style.display = 'none'; 
        }, 3000);
    }
});
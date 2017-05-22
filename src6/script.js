function init() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}

function changeBigPicture(event) {
    //очистка старого изображения
    var bigElem = document.getElementById('big');
    bigElem.innerHTML = '';
    //прочтём имя картинки
    var smallElem = event.target;
    var newBig = './bigImg/' + smallElem.id + '.jpg';
    //создать большую
    var newBigElem = document.createElement('img');
    newBigElem.src = newBig;
    //поместить в big
    bigElem.appendChild(newBigElem);
}
window.onload = init;

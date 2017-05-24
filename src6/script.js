// window.onload = function() {

    function init() {
        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].onclick = onImageClick;
        }

        changeBigPicture(images[0].id);
    }

    function onImageClick(event) {
        changeBigPicture(event.target.id);
    }

    function changeBigPicture(id) {
        var newBig = './bigImg/' + id + '.jpg';
        //создать большую 
        var newBigElem = document.createElement('img');
        newBigElem.src = newBig;

        newBigElem.onload = function() {
            //очистка старого изображения 
            var bigElem = document.getElementById('big');
            bigElem.innerHTML = '';

            //поместить в big 
            bigElem.appendChild(newBigElem);
        };
        newBigElem.onerror = function(event) {
            alert('Что-то пошло не так!');
        };
    }



    window.onload = init;


    var prev_btn = document.getElementById('prev_btn');
    var next_btn = document.getElementById('next_btn');
    var i = 0;

    prev_btn.onclick = function() {
        i--;
        if (i < 0) {
            i = images.length - 1;
        }

    }


    

    next_btn.onclick = function() {
        i++;
        if (i >= images.length) {
            i = 0;
        }
    }

// changeBigPicture(images[i].id);
// };


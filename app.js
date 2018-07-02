window.onload = function () {
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const pictures = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'];
    let count = 0;
    leftArrow.style.display = 'none';

    document.addEventListener('keydown', function (event) {
        keyPressRightArrow(event);
        keyPressLeftArrow(event);
    });

    leftArrow.addEventListener('click', function () {
        leftArrowClicked();
    });

    rightArrow.addEventListener('click', function () {
        rightArrowClicked();
    });

    function keyPressRightArrow(event){
        if (event.key == 'ArrowRight') {
            if(count == pictures.length-1){
                rightArrow.style.display = 'none';
                return;
            }
            rightArrowClicked();
        }
    }

    function keyPressLeftArrow(event){
        if (event.key == 'ArrowLeft') {
            if(count == 0){
                leftArrow.style.display = 'none';
                return;
            }
            leftArrowClicked();
        }
    }

    function leftArrowClicked() {
        count--;

        if (count == 0) {
            leftArrow.style.display = 'none';
        }

        rightArrow.style.display = 'block'
        document.getElementById("imageContainer").style.backgroundImage = `url('Pictures/${pictures[count]}.png')`;
    };

    function rightArrowClicked() {
        count++;
        document.getElementById("imageContainer").style.backgroundImage = `url('Pictures/${pictures[count]}.png')`;

        if (count == pictures.length-1) {
            rightArrow.style.display = 'none';
        }
        
        leftArrow.style.display = 'block';
    }
};
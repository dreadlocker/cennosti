window.onload = function () {
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    let pagesID = 1;

    leftArrow.addEventListener('click', function () {
        document.getElementById(`page${pagesID}`).style.display = 'none';
        pagesID--;
        document.getElementById(`page${pagesID}`).style.display = 'inline-block';

        if (pagesID < 5) {
            document.getElementById(`rightArrow`).style.visibility = 'visible';
        }

        if (pagesID == 1) {
            document.getElementById(`leftArrow`).style.visibility = 'hidden';
        }
    });

    rightArrow.addEventListener('click', function () {
        document.getElementById(`page${pagesID}`).style.display = 'none';
        pagesID++;
        document.getElementById(`page${pagesID}`).style.display = 'inline-block';

        if (pagesID > 1) {
            document.getElementById(`leftArrow`).style.visibility = 'visible';
        }
        
        if (pagesID == 5) {
            document.getElementById(`rightArrow`).style.visibility = 'hidden';
        }
    });
};
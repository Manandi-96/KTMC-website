var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");
    for (let tablink of tablinks) {
        if (tablink.getAttribute("onclick").includes(tabname)) {
            tablink.classList.add("active-link");
        }
    }
}
// comments section

const comments = document.querySelectorAll('.comment');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function showComment(index) {
    comments.forEach((comment, i) => {
        comment.style.display = i === index ? 'block' : 'none';
    });
}

showComment(currentIndex);

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showComment(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < comments.length - 1) {
        currentIndex++;
        showComment(currentIndex);
    }
});





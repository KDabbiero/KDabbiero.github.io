document.getElementById("mod").innerHTML = document.lastModified;

document.getElementById("year").innerHTML = new Date().getFullYear();

//current day
function currentDay() {
    const d = new Date();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let fullDate = days[day] + ", " + date + " " + months[month] + " " + year;
    document.getElementById("currentDate").innerHTML = "Today is " + fullDate;
  
  }
  
  currentDay();

//lazy loading
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 1
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

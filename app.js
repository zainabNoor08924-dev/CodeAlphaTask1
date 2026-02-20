const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const filterBtns = document.querySelectorAll(".filter-btn");

let currentIndex = 0;
let images = Array.from(galleryItems);

// Open Lightbox
galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next Image
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Previous Image
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Filter Function
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        document.querySelectorAll(".gallery-item").forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
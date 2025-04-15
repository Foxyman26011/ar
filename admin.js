document.getElementById("gallery-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const imageUrl = document.getElementById("image-url").value;
    const description = document.getElementById("image-description").value;

    if (imageUrl && description) {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = description;

        const text = document.createElement("p");
        text.textContent = description;

        galleryItem.appendChild(img);
        galleryItem.appendChild(text);

        document.getElementById("gallery").appendChild(galleryItem);

        document.getElementById("image-url").value = "";
        document.getElementById("image-description").value = "";
    }
});

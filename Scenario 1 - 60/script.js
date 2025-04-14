document.addEventListener("DOMContentLoaded", () => {
   
    const popup = document.getElementById("popup");

    const showPopup = () => {
        popup.classList.add("show"); 
    };

    const hidePopup = () => {
        setTimeout(() => {
            popup.classList.remove("show"); 
        }, 5000);
    };

    showPopup();
    hidePopup();

    popup.addEventListener("click", () => {
        popup.classList.remove("show");
    });
});
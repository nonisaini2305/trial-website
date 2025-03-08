document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Item added to cart!");
        });
    });
});

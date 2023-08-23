document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar__menu a");

    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        // console.log("Target ID:", targetId); 
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth"
          });
        }
      });
    });
});
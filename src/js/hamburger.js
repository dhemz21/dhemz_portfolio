const menuIcon = document.getElementById('menu__icon');
const mobileMenu = document.getElementById('mobile');
const mobileMenuItems = mobileMenu.querySelectorAll('a'); // Select all menu items

// Function to close the mobile menu
function closeMobileMenu() {
  menuIcon.classList.remove('show');
  mobileMenu.classList.remove('show');
  document.body.classList.remove('no-scroll');
}

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('show');
  mobileMenu.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
});

// Add click event listeners to each menu item
mobileMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    closeMobileMenu(); // Close the menu when an item is clicked
  });
});

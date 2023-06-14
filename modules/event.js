// Function to handle navigation links click event
function handleNavigationLinkClick(event) {
  event.preventDefault();
  const target = this.getAttribute('href').substring(1); // Get the target id
  const sections = document.querySelectorAll('.content-section');
  // Show the target section and hide the others
  sections.forEach((section) => {
    if (section.id === target) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

export default function addEventListeners() {
  // Event listener for navigation links
  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', handleNavigationLinkClick);
  });
}


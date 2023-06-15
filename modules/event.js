// Function to handle navigation links click event

const handleNavigationLinkClick = (event) => {
  event.preventDefault();
  const target = event.target.getAttribute('href').substring(1); // Use event.target instead of this
  const sections = document.querySelectorAll('.content-section');
  // Show the target section and hide the others
  sections.forEach((section) => {
    if (section.id === target) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
};

const addEventListener = () => {
  // Event listener for navigation links
  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', handleNavigationLinkClick);
  });
};
export default addEventListener;

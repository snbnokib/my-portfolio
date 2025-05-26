// script.js

// JSON-like data for projects
const projects = [
  {
    id: 7,
    title: "Landing Page - Tech Startup UI",
    image: "images/First project.png",
    description:
      "A vibrant tech startup landing page with a bold headline, login form, and call-to-action, set against a stunning sunset background.",
    link: "https://github.com/snbnokib/Project-for-Autologic-Ltd",
  },
  {
    id: 2,
    title: "First Portfolio",
    image: "images/Frist Portfolio.png",
    description:
      "This is my first front-end developer portfolio, featuring a clean and modern design with a dark background, centered profile image, and a bold introduction. It includes smooth animations and hover effects to enhance user interaction. Built to showcase my identity and passion for web development, this portfolio reflects the beginning of my journey in a simple yet professional way.",
    link: "#",
  },
  {
    id: 3,
    title: "Photography team page",
    image: "images/Photography front page.png",
    description:
      "At Frame of the Art, we turn moments into masterpieces. With a creative eye and professional touch, our team captures the essence of fashion, weddings, family, and business through stunning photography. Smooth animations and sleek hover effects guide you through our world — where every shot tells your story.",
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio",
    image: "images/Portfolio.png",
    description:
      "This is my personal portfolio showcasing a collection of web development projects, with a focus on clean design, responsive layouts, and user-friendly interfaces.",
    link: "snbportfolio.netlify.app",
  },
  {
    id: 5,
    title: "Restaurant Welcome Page",
    image: "images/Restaurant front page.png",
    description: "A clean and responsive front page for a restaurant website. It features a top navbar, welcome text with a call-to-action button on the left, and a login form on the right—designed for both style and user-friendly navigation.",
    link: "https://github.com/snbnokib/Project-for-a-restaurant",
  },
  {
    id: 6,
    title: "Food catering Service",
    image: "images/Project for food cetaring service.png",
    description:
      "Khana is a modern food catering website showcasing gourmet dishes and special offers. It features a clean design, easy navigation, high-quality food images, and interactive elements like ratings and tags. With options for login and reservations, it's built for restaurants aiming to attract customers and streamline bookings.",
    link: "https://github.com/snbnokib/khana-catering",
  },
];

let currentProjectIndex = 0;

// Function to render the gallery section
function renderGallery() {
    const galleryContainer = document.getElementById("projects");
    galleryContainer.innerHTML = ""; // Clear existing content

    // Sort projects by ID in descending order
    const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

    sortedProjects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-tile");
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <h3>${project.title}</h3>
        `;
        projectCard.addEventListener("click", () => openModal(index, sortedProjects));
        galleryContainer.appendChild(projectCard);
    });
}

// Function to open the modal box
function openModal(index, sortedProjects) {
    currentProjectIndex = index;
    const project = sortedProjects[currentProjectIndex];
    const modal = document.getElementById("projectModal");
    document.getElementById("modalTitle").innerText = project.title;
    document.getElementById("modalImage").src = project.image;
    document.getElementById("modalImage").alt = project.title;
    document.getElementById("modalDescription").innerText = project.description;
    document.getElementById("modalLink").href = project.link;
    modal.style.display = "block";
}

// Function to close the modal box
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Function to show the next project
function showNextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    openModal(currentProjectIndex, [...projects].sort((a, b) => b.id - a.id));
}

// Function to show the previous project
function showPreviousProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    openModal(currentProjectIndex, [...projects].sort((a, b) => b.id - a.id));
}

// Event listener for closing the modal
document.querySelector(".close").addEventListener("click", closeModal);

// Event listeners for navigation buttons
document.querySelector(".prev").addEventListener("click", showPreviousProject);
document.querySelector(".next").addEventListener("click", showNextProject);

// Event listener for keyboard actions
window.addEventListener("keydown", (event) => {
    const modal = document.getElementById("projectModal");
    if (modal.style.display === "block") {
        if (event.key === "Escape") {
            closeModal();
        } else if (event.key === "ArrowRight") {
            showNextProject();
        } else if (event.key === "ArrowLeft") {
            showPreviousProject();
        }
    }
});

// Initial render of the gallery
renderGallery();

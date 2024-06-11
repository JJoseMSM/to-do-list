
export function navbar() {
   
  document.getElementById('openFormButton').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex';
});

document.getElementById('submitButton').addEventListener('click', function() {
    // Capture the input values
    var projectName = document.getElementById('projectName').value;
    var projectDescription = document.getElementById('projectDescription').value;

    // Create a new div element for the project card
    var projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    // Add the project name and description to the card
    var projectTitle = document.createElement('h3');
    projectTitle.textContent = projectName;
    var projectDesc = document.createElement('p');
    projectDesc.textContent = projectDescription;

    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDesc);

    // Append the project card to the projects div
    document.getElementById('projects').appendChild(projectCard);

    // Close the form
    document.getElementById('popupForm').style.display = 'none';

    // Clear the form inputs
    document.getElementById('projectName').value = '';
    document.getElementById('projectDescription').value = '';
});
}
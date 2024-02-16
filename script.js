document.getElementById("createCourse").addEventListener("click", function() {
    // Code to create a new course
    // Display new course in coursesList
    
    const coursesList = document.getElementById("coursesList");
    const courseName = prompt("Enter the course name:");
    
    if(courseName) {
        coursesList.innerHTML += `<p>${courseName}</p>`;
        coursesList.classList.remove("hidden");
    }
});

// Populate Performance Assessment Section
const performanceList = document.getElementById("performanceList");
const performanceData = ["Excellent", "Good", "Average", "Needs Improvement"];

performanceData.forEach(data => {
    const listItem = document.createElement("li");
    listItem.textContent = data;
    performanceList.appendChild(listItem);
});

// Populate Incentives Section
const incentivesContent = document.getElementById("incentivesContent");
incentivesContent.innerHTML = "<p>Unlock exciting incentives based on your performance!</p>";

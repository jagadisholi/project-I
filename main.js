// Function to update the current time
function updateCurrentTime() {
  const timeElement = document.getElementById("currentTime");
  const now = new Date();
  timeElement.innerHTML = now.toLocaleTimeString();
}

// Function to update the current date
function updateCurrentDate() {
  const dateElement = document.getElementById("currentDate");
  const now = new Date();
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayOfWeek = day[now.getDay()];
  const formattedDate = `${dayOfWeek}, ${month[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()} 
`;     dateElement.innerHTML = formattedDate;
 }

//  Initial calls to update the date and time when the page loads
 updateCurrentDate();
 updateCurrentTime();

// Update the date and time every second
setInterval(updateCurrentDate, 1000); // Updates date every second
setInterval(updateCurrentTime, 1000); // Updates time every second


window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("nav-container").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "path/to/nav.html", true);
    xhr.send();
};



let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let h2Body = document.querySelector("h2");


if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

function selectDietary() {
    let orgRole = document.getElementById('orgRole');
    let orgRoleVal = orgRole.value;
    
    switch (orgRoleVal) {
        case "Employee":
            alert("authorized to have access to \"Dietary Services\"");ategory = "Administrator";
            break;
        case "Enrolled Member":
            alert("authorized to have access to \"Dietary Services\" and one-on-one interaction with a dietician");
            break;
        case "Subscriber":
            alert("authorized to have partial access to facilitate \"Dietary Services\" only");
            break;
        case "Non-Subscriber":
            alert("enroll or at least subscribe first to avail this facility");
            break;
        default:
            userCategory = "Unknown";
    }
}

console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);
console.log("h2body:", h2Body);

const akanData = {
    Sunday: {
        Male: "Kwasi",
        Female: "Akosua"
    },
    Monday: {
        Male: "Kwadwo",
        Female: "Adwoa"
    },
    Tuesday: {
        Male: "Kwabena",
        Female: "Abenaa"
    },
    Wednesday: {
        Male: "Kwaku",
        Female: "Akua"
    },
    Thursday: {
        Male: "Yaw",
        Female: "Yaa"
    },
    Friday: {
        Male: "Kofi",
        Female: "Afua"
    },
    Saturday: {
        Male: "Kwame",
        Female: "Ama"
    }
};

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function validateInput(day, month, gender) {

    if (day < 1 || day > 31) {
        alert("Please enter a valid day (1 - 31).");
        return false;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month (1 - 12).");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }

    return true;
}

// function calculateDay(day, month, year) {

//     const CC = Math.floor(year / 100);
//     const YY = year % 100;

//     let dayIndex =
//         (
//             ((CC / 4) - 2 * CC - 1) +
//             ((5 * YY) / 4) +
//             ((26 * (month + 1)) / 10) +
//             day
//         );

//     dayIndex = Math.floor(dayIndex) % 7;

//     if (dayIndex < 0) {
//         dayIndex += 7;
//     }

//     return dayIndex;
// }

// function getAkanName(dayIndex, gender) {

//     const dayName = days[dayIndex];

//     return {
//         day: dayName,
//         name: akanNames[dayName][gender]
//     };
// }

// document.getElementById("inputform").addEventListener("submit", function (event) {

//     event.preventDefault();

//     const birthdate = document.getElementById("birthdate").value;
//     const gender = document.getElementById("gender").value;
//     const response = document.getElementById("response");

//     if (birthdate === "") {
//         alert("Please enter your birthdate.");
//         return;
//     }

//     const date = new Date(birthdate);

//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();

//     if (!validateInput(day, month, gender)) {
//         return;
//     }

//     const dayIndex = calculateDay(day, month, year);

//     const result = getAkanName(dayIndex, gender);

//     response.innerHTML = `
//         <h3>Your Result</h3>
//         <p><strong>Day of Birth:</strong> ${result.day}</p>
//         <p><strong>Your Akan Name:</strong> ${result.name}</p>
//     `;

//     document.getElementById("inputform").reset();

// });

// Get the form
const studentForm = document.getElementById("studentForm");


// Form Submit Event
studentForm.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();


    // Get Student Details
    const name = document.getElementById("studentName").value.trim();

    const registerNumber =
        document.getElementById("registerNumber").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const course =
        document.getElementById("course").value;


    // Get Marks
    const mark1Input = document.getElementById("mark1").value;
    const mark2Input = document.getElementById("mark2").value;
    const mark3Input = document.getElementById("mark3").value;


    // Check Student Details
    if (
        name === "" ||
        registerNumber === "" ||
        email === "" ||
        course === ""
    ) {

        alert("Please fill in all student details.");

        return;
    }


    // Check Marks
    if (
        mark1Input === "" ||
        mark2Input === "" ||
        mark3Input === ""
    ) {

        alert("Please enter marks for all subjects.");

        return;
    }


    // Convert marks into numbers
    const mark1 = Number(mark1Input);
    const mark2 = Number(mark2Input);
    const mark3 = Number(mark3Input);


    // Validate marks
    if (
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100
    ) {

        alert("Marks must be between 0 and 100.");

        return;
    }


    // Calculate Total
    const total = mark1 + mark2 + mark3;


    // Calculate Percentage
    const percentage = (total / 300) * 100;


    // Calculate Pass / Fail
    let result;

    if (
        mark1 >= 40 &&
        mark2 >= 40 &&
        mark3 >= 40
    ) {

        result = "PASS";

    } else {

        result = "FAIL";

    }


    // Display Student Details

    document.getElementById("displayName").textContent =
        name;

    document.getElementById("displayRegister").textContent =
        registerNumber;

    document.getElementById("displayEmail").textContent =
        email;

    document.getElementById("displayCourse").textContent =
        course;


    // Display Marks

    document.getElementById("displayMark1").textContent =
        mark1;

    document.getElementById("displayMark2").textContent =
        mark2;

    document.getElementById("displayMark3").textContent =
        mark3;


    // Display Total

    document.getElementById("displayTotal").textContent =
        total + " / 300";


    // Display Percentage

    document.getElementById("displayPercentage").textContent =
        percentage.toFixed(2) + "%";


    // Display Result

    const resultElement =
        document.getElementById("displayResult");

    resultElement.textContent = result;


    // Change Result Badge

    if (result === "PASS") {

        resultElement.className =
            "badge bg-success";

    } else {

        resultElement.className =
            "badge bg-danger";

    }


    // Show Result Section

    document
        .getElementById("resultSection")
        .classList.remove("d-none");

});


// Clear Button

document
    .getElementById("clearButton")
    .addEventListener("click", function () {

        // Hide result section
        document
            .getElementById("resultSection")
            .classList.add("d-none");

    });
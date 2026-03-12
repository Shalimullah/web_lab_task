function checkResult() {
    // 1. Get the value from the input field
    let marks = document.getElementById("marksInput").value;
    let resultElement = document.getElementById("displayResult");

    // 2. Convert the input to a number
    marks = Number(marks);

    // 3. The Logic: Conditionals
    if (marks >= 50) {
        resultElement.innerText = "PASS 🎉";
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = "FAIL ❌";
        resultElement.style.color = "red";
    }
}
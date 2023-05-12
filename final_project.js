function calculateScore(event) 
{
    event.preventDefault(); // Prevent form submission

    let score = 0;

    let q1Answer = document.querySelector('input[name="q1"]:checked').value;
    if (q1Answer === 'c') {
        score += 1;
    }

    let q2Answer = document.querySelector('input[name="q2"]:checked').value;
    if (q2Answer === 'b') {
        score += 1;
    }

    let q3Answer = document.querySelector('input[name="q3"]:checked').value;
    if (q3Answer === 'c') {
        score += 1;
    }

    let q4Answer = document.querySelector('input[name="q4"]:checked').value;
    if (q4Answer === 'a') {
        score += 1;
    }

    let q5Answer = document.querySelector('input[name="q5"]:checked').value;
    if (q5Answer === 'c') {
        score += 1;
    }

    let q6Answer = document.querySelector('input[name="q6"]:checked').value;
    if (q6Answer === 'd') {
        score += 1;
    }

    let q7Answer = document.querySelector('input[name="q6"]:checked').value;
    if (q6Answer === 'd') {
        score += 1;
    }

    alert("Your score is: " + score);
}

// Attach the calculateScore function to the form's submit event
let form = document.querySelector('form');
form.addEventListener('submit', calculateScore);

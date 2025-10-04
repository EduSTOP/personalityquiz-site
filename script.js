document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const answers = ["q1", "q2", "q3"];
  const score = { A: 0, B: 0, C: 0 };

  answers.forEach(q => {
    const answer = document.querySelector(`input[name="${q}"]:checked`).value;
    score[answer]++;
  });

  // Determine the highest score
  let result = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);

  // Redirect based on result
  window.location.href = `results/type-${result.toLowerCase()}.html`;
});

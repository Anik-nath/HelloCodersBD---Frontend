const deadlineElement = document.querySelector("#deadlineDate");
const applyButton = document.querySelector("#applyButton");
function getDeadlineDate() {
    const deadlineText = deadlineElement.textContent.trim(); //"2 Oct 2024"
  return new Date(deadlineText);
}
function checkDeadline() {
  const deadlineDate = getDeadlineDate();
  const currentDate = new Date();

  if (currentDate > deadlineDate) {
    applyButton.disabled = true;
    applyButton.textContent = "Deadline Passed";
    applyButton.classList.remove("button--primary");
    applyButton.classList.add("btn-secondary");
    applyButton.classList.add("rounded");
  }
}
document.addEventListener("DOMContentLoaded", checkDeadline);

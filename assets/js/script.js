// Active navigation highlight
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Budget form validation
const budgetForm = document.getElementById("budgetForm");
const formMessage = document.getElementById("formMessage");

if (budgetForm) {
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const projectName = document.getElementById("projectName").value.trim();
    const ownerEmail = document.getElementById("ownerEmail").value.trim();
    const serviceType = document.getElementById("serviceType").value;
    const monthlyBudget = Number(document.getElementById("monthlyBudget").value);

    if (!projectName || !ownerEmail || !serviceType || monthlyBudget <= 0) {
      formMessage.textContent = "Please complete all required fields with a valid monthly budget.";
      formMessage.className = "form-message error";
      return;
    }

    formMessage.textContent = `Budget request submitted for ${projectName}. Estimated monthly budget: $${monthlyBudget.toFixed(2)}.`;
    formMessage.className = "form-message success";

    budgetForm.reset();
  });
}

// Dashboard simulation
const totalSpend = document.getElementById("totalSpend");
const budgetProgress = document.getElementById("budgetProgress");
const budgetMessage = document.getElementById("budgetMessage");
const budgetPercent = document.getElementById("budgetPercent");
const circlePercent = document.getElementById("circlePercent");

if (budgetPercent) {
  budgetPercent.textContent = `${percentage}%`;
}

if (circlePercent) {
  circlePercent.textContent = `${percentage}%`;
}

if (totalSpend && budgetProgress && budgetMessage) {

  const spend = 1800;
  const budget = 2000;

  const percentage = Math.round((spend / budget) * 100);

  totalSpend.textContent = `$${spend.toLocaleString()}.00`;

  budgetProgress.value = percentage;

  budgetMessage.textContent =
    `${percentage}% of the monthly budget has been used.`;
}
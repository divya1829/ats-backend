console.log("📧 Email Worker Started");

// Simulated email sending function
function sendEmail(to, subject) {
  console.log(`📨 Sending email to ${to}`);
  console.log(`📌 Subject: ${subject}`);
}

// Simulate background processing
setTimeout(() => {
  sendEmail("candidate@gmail.com", "Application Submitted");
}, 2000);

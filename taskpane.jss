Office.onReady(() => {
  document.getElementById("redirectBtn").addEventListener("click", redirectEmail);
});

function redirectEmail() {
  const recipient = document.getElementById("redirectEmail").value;
  if (!recipient) {
    alert("Please enter a recipient email.");
    return;
  }

  Office.context.mailbox.item.forwardAsync(
    { toRecipients: [recipient] },
    { 
      // Options
      htmlBody: Office.context.mailbox.item.body, 
      subject: Office.context.mailbox.item.subject 
    },
    (asyncResult) => {
      if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
        alert("Email redirected successfully!");
      } else {
        alert("Error redirecting email: " + asyncResult.error.message);
      }
    }
  );
}

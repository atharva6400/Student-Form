document.getElementById('emailForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;

  fetch("https://script.google.com/macros/s/AKfycbxHKTn9axLLy_jmWfY2FMS6TOkQkBxYpkfURM90JPrT94837lzRaLi3_vKHLg20MIkU/exec", {
    method: "POST",
    mode: "no-cors",  // 👈 This is KEY to allow Google Apps Script to accept it
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email })
  });

  // Since "no-cors" mode prevents reading response, we just show success blindly
  document.getElementById('responseMsg').textContent = "Email submitted!";

  document.getElementById('emailForm').reset();
});

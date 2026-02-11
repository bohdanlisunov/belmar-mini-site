document.getElementById("leadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    phone: form.phone.value,
    email: form.email.value,
    box_id: 28,
    offer_id: 5,
    countryCode: "GB",
    language: "en",
    password: "qwerty12",
    landingUrl: window.location.hostname,
    ip: "127.0.0.1"
  };

  try {
    const res = await fetch("/.netlify/functions/addlead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    document.getElementById("result").textContent =
      JSON.stringify(result, null, 2);
  } catch (err) {
    document.getElementById("result").textContent = "Error: " + err.message;
  }
});

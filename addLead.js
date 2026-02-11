const API_URL = "https://crm.belmar.pro/api/v1/addlead";
const TOKEN = "ba67df6a-a17c-476f-8e95-bcdb75ed3958";

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
    ip: await getIP()
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token": TOKEN
    },
    body: JSON.stringify(data)
  });

  document.getElementById("result").textContent =
    JSON.stringify(await res.json(), null, 2);
});

async function getIP() {
  const res = await fetch("https://api.ipify.org?format=json");
  return (await res.json()).ip;
}

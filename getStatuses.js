const API_URL = "https://crm.belmar.pro/api/v1/getstatuses";
const TOKEN = "ba67df6a-a17c-476f-8e95-bcdb75ed3958";

document.getElementById("load").addEventListener("click", async () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const payload = {
    date_from: from ? from.replace("T", " ") + ":00" : undefined,
    date_to: to ? to.replace("T", " ") + ":00" : undefined,
    page: 0,
    limit: 100
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token": TOKEN
    },
    body: JSON.stringify(payload)
  });

  const json = await res.json();
  const tbody = document.getElementById("table");
  tbody.innerHTML = "";

  JSON.parse(json.data).forEach(l => {
    tbody.innerHTML += `
      <tr>
        <td>${l.id}</td>
        <td>${l.email}</td>
        <td>${l.status}</td>
        <td>${l.ftd}</td>
      </tr>
    `;
  });
});

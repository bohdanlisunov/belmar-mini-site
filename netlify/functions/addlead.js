// functions/addlead.js   (або netlify/functions/addlead.js)

const API_URL = 'https://crm.belmar.pro/api/v1/addlead';
const TOKEN   = 'ba67df6a-a17c-476f-8e95-bcdb75ed3958';

export default async (request) => {
  try {
    // Отримуємо тіло запиту (в сучасному форматі Netlify Functions)
    const data = await request.json();

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': TOKEN
      },
      body: JSON.stringify(data)
    });

    // Перевіряємо, чи успішна відповідь
    if (!res.ok) {
      throw new Error(`API answered with status ${res.status}`);
    }

    const result = await res.json();

    return new Response(
      JSON.stringify(result),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({ status: false, error: err.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
const fetch = require('node-fetch');

const API_URL = 'https://crm.belmar.pro/api/v1/addlead';
const TOKEN = 'ba67df6a-a17c-476f-8e95-bcdb75ed3958';

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': TOKEN
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: false, error: err.message })
    };
  }
};

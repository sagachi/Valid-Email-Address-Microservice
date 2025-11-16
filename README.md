Communication Contract:
1. Primary communication will be done through discord.                       
2. A response from every team member is expected within 24 hours.
3. Backup plan will go into effect if a team member is unresponsive for over 72 hours.
4. Group assignments should be discussed and planned at least 4–5 days before the due   date, with the goal of completing them 1–2 days early.
5. Everyone agrees to remain respectful of each other's opinions and be open to hearing all ideas/feedback and ultimately resolve any disagreements with majority vote.

A. To request data from the microservice, other programs can send an HTTP POST request to the endpoint /api/validate-email. The request must include a JSON object with a single parameter (email).

Example call using Node.js:
const response = await fetch("http://localhost:3000/api/validate-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "test@example.com" })
});
const data = await response.json();
console.log(data);

Example call using curl:
curl -X POST http://localhost:3000/api/validate-email \
-H "Content-Type: application/json" \
-d "{\"email\": \"test@example.com\"}"

B. To receive data from the microservice, the microservice will respond with a JSON object containing the validation result. The response will include whether the email format is valid, whether it exists, and any other relevant messages. Other programs can receive this data by parsing the JSON response.

Example call using Node.js:
const result = await fetch("http://localhost:3000/api/validate-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "hello@gmail.com" })
});
const output = await result.json();
if (output.valid) {
  console.log("Email is valid and exists:", output.message);
} else {
  console.log("Email is invalid:", output.reason || output.message);
}



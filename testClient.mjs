const BASE_URL = "http://localhost:3000/api/v1/validate/email";

//List of emails to test
const testEmails = [
  "test@gmail.com",
  "invalid-email",
  "nobody@example.com",
  "galarzsa@oregonstate.edu",
  "fakeuser@domainthatdoesnotexist12345.com"
];

async function testEmail(email) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        checkDomain: true,
        checkSMTP: false
      })
    });

    const result = await response.json();
    console.log("\n----------------------------------------------");
    console.log(` Email: ${email}`);
    console.log(" Result:", result);
  } catch (err) {
    console.error(`Error testing email ${email}:`, err.message);
  }
}

async function runTests() {
  console.log("Running email validation tests...\n");

  for (const email of testEmails) {
    await testEmail(email);
  }

  console.log("\nTests complete!");
}

runTests();

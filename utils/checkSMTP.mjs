import emailExistence from "email-existence";

export async function checkSMTP(email) {
  return new Promise((resolve) => {
    emailExistence.check(email, (err, exists) => {
      if (err) resolve(false);
      else resolve(exists);
    });
  });
}

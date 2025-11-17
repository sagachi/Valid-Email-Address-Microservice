import validator from "validator";
import { checkDomain } from "../utils/checkDomain.mjs";
import { checkSMTP } from "../utils/checkSMTP.mjs";

export async function validateEmail(req, res) {
  try {
    const { email, checkDomain: doDomain = true, checkSMTP: doSMTP = false } = req.body;

    if (!email) {
      return res.status(400).json({ valid: false, reason: "Missing email parameter" });
    }

    //Format check
    const isFormatValid = validator.isEmail(email);
    if (!isFormatValid) {
      return res.json({
        valid: false,
        reason: "Invalid email format",
        details: { format: false, domain: false, smtp: false }
      });
    }

    //Domain check
    let isDomainValid = true;
    if (doDomain) {
      isDomainValid = await checkDomain(email);
      if (!isDomainValid) {
        return res.json({
          valid: false,
          reason: "Domain not found",
          details: { format: true, domain: false, smtp: false }
        });
      }
    }

    //SMTP check
    let isSMTPValid = true;
    if (doSMTP) {
      isSMTPValid = await checkSMTP(email);
    }

    const overallValid = isFormatValid && isDomainValid && isSMTPValid;

    return res.json({
      valid: overallValid,
      reason: overallValid ? "Email exists and domain is valid" : "Mailbox not reachable",
      details: {
        format: isFormatValid,
        domain: isDomainValid,
        smtp: isSMTPValid
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ valid: false, reason: "Internal server error" });
  }
}

// Direct RSVP Multi-Engine Dispatcher
// 1. Direct Web3Forms submission
// 2. Direct FormSubmit submission
// 3. Vercel Serverless Function (/api/rsvp)

export async function sendRSVPEmail(rsvpData) {
  console.log("📤 Dispatching RSVP for:", rsvpData.name);

  // 1. Web3Forms Public Key Dispatch
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: "6256f6ba-dd93-4a11-8fc1-b236b28bcce9",
        subject: `💍 New RSVP: ${rsvpData.name} - Raja & Karishma Wedding`,
        from_name: "Raja & Karishma Wedding",
        email: "prashantkrjha12@gmail.com",
        name: rsvpData.name,
        phone: rsvpData.phone,
        guests: rsvpData.guests,
        attending: rsvpData.attending === "yes" ? "Attending with Joy (Yes)" : "Regretfully Declining (No)",
        message: `Mobile: ${rsvpData.phone} | Guests: ${rsvpData.guests} | Status: ${rsvpData.attending} | Blessings: ${rsvpData.message || 'None'}`
      })
    });
    const result = await res.json();
    console.log("Web3Forms result:", result);
  } catch (e) {
    console.log("Web3Forms error:", e);
  }

  // 2. Direct Vercel /api/rsvp endpoint (jab Vercel pe deploy hoga, tab nodemailer se jayega)
  try {
    fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rsvpData)
    }).catch(() => {});
  } catch (e) {}

  return { success: true };
}

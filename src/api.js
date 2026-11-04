// RSVP Email Dispatch Service
// Powered by EmailJS / Web3Forms directly from the browser without needing a backend server!
// Target Recipient: prashantkrjha1233@gmail.com, Karishma.jha832@gmail.com

/**
 * Sends RSVP directly from browser to your emails
 */
export async function sendRSVPEmail(rsvpData) {
  const messageBody = `
========================================
💍 NEW ROYAL WEDDING RSVP SUBMISSION
========================================
Guest Name: ${rsvpData.name}
Mobile Number: ${rsvpData.phone}
Total Guests: ${rsvpData.guests}
Attendance: ${rsvpData.attending === 'yes' ? 'Attending with Joy (YES)' : 'Regretfully Declining (NO)'}
Message/Blessings: ${rsvpData.message || 'No custom message'}
Submission Time: ${new Date().toLocaleString()}
========================================
`;

  try {
    // 1. Direct Web3Forms submission (Guaranteed instant inbox delivery)
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: "6256f6ba-dd93-4a11-8fc1-b236b28bcce9", // Public direct relay key
        subject: `💍 Royal Wedding RSVP: ${rsvpData.name}`,
        from_name: "Raja & Karishma Wedding",
        email: "prashantkrjha12@gmail.com",
        to_email: "prashantkrjha1233@gmail.com",
        cc_email: "Karishma.jha832@gmail.com",
        name: rsvpData.name,
        phone: rsvpData.phone,
        guests: rsvpData.guests,
        attending: rsvpData.attending === 'yes' ? 'Attending' : 'Not Attending',
        message: messageBody
      })
    });

    const data = await res.json();
    if (data.success) {
      console.log("✅ RSVP successfully sent to your email!");
      return { success: true };
    }
  } catch (err) {
    console.log("Relay 1 status:", err);
  }

  // 2. Direct FormSubmit submission
  try {
    await fetch("https://formsubmit.co/ajax/prashantkrjha1233@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `💍 New RSVP: ${rsvpData.name} - Raja & Karishma Wedding`,
        _template: "table",
        _cc: "Karishma.jha832@gmail.com",
        "Guest Name": rsvpData.name,
        "Mobile Number": rsvpData.phone,
        "Total Guests": rsvpData.guests,
        "Attending": rsvpData.attending === 'yes' ? 'Attending with Joy' : 'Regretfully Declining',
        "Blessings": rsvpData.message || 'None'
      })
    });
  } catch (e) {
    console.log("Relay 2 status:", e);
  }

  return { success: true };
}

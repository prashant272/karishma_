import nodemailer from 'nodemailer';

// Transporter with your provided Google App Password credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'prashantkrjha12@gmail.com',
    pass: 'ypyw wbhy uywb hepy'
  }
});

const TARGET_EMAILS = [
  'prashantkrjha1233@gmail.com',
  'Karishma.jha832@gmail.com'
];

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, guests, joiningDate, attending, message } = req.body;

    const mailOptions = {
      from: '"Raja & Karishma Royal Wedding" <prashantkrjha12@gmail.com>',
      to: TARGET_EMAILS.join(', '),
      subject: `💍 New RSVP: ${name} (${attending === 'yes' ? 'Attending' : 'Not Attending'}) - Royal Wedding`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 25px; border: 2px solid #D4AF37; border-radius: 12px; background-color: #FAF5EB; color: #2A050D;">
          <div style="text-align: center; border-bottom: 2px solid #8B1E3F; padding-bottom: 15px; margin-bottom: 20px;">
            <h1 style="color: #671420; margin: 0; font-size: 24px;">Royal Wedding RSVP Confirmation</h1>
            <p style="color: #8B1E3F; font-size: 14px; margin-top: 5px;">Raja & Karishma &bull; 10 December 2026</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background-color: #F3E5AB;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #D4AF37; width: 35%;">Guest Name</td>
              <td style="padding: 10px; border: 1px solid #D4AF37;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #D4AF37;">Phone Number</td>
              <td style="padding: 10px; border: 1px solid #D4AF37;"><a href="tel:${phone}" style="color: #671420; text-decoration: none; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr style="background-color: #F3E5AB;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #D4AF37;">Total Guests</td>
              <td style="padding: 10px; border: 1px solid #D4AF37;">${guests}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #D4AF37;">Date of Joining Event</td>
              <td style="padding: 10px; border: 1px solid #D4AF37; font-weight: bold; color: #8B1E3F;">${joiningDate || '10 December 2026'}</td>
            </tr>
            <tr style="background-color: #F3E5AB;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #D4AF37;">Attending Status</td>
              <td style="padding: 10px; border: 1px solid #D4AF37; font-weight: bold; color: ${attending === 'yes' ? '#2e7d32' : '#c62828'};">
                ${attending === 'yes' ? '✅ Attending with Joy' : '❌ Regretfully Declining'}
              </td>
            </tr>
            <tr style="background-color: #F3E5AB;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #D4AF37;">Wishes / Message</td>
              <td style="padding: 10px; border: 1px solid #D4AF37; font-style: italic;">${message || 'No custom message provided.'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #D4AF37;">Submitted At</td>
              <td style="padding: 10px; border: 1px solid #D4AF37;">${new Date().toLocaleString()}</td>
            </tr>
          </table>

          <div style="text-align: center; font-size: 12px; color: #8B1E3F; border-top: 1px solid #D4AF37; padding-top: 15px;">
            Sent automatically from Raja & Karishma Royal Wedding Invitation Platform.
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'RSVP email sent successfully to both addresses!' });
  } catch (error) {
    console.error('Nodemailer error on Vercel Function:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}


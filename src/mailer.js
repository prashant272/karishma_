import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'prashantkrjha12@gmail.com',
    pass: 'ypyw wbhy uywb hepy'
  }
});

const TARGET_EMAILS = [
  'prashantkrjha1233@gmail.com',
  'Karishma.jha832@gmail.com',
  'carajajyothula@gmail.com'
];

export async function sendDirectMail(data) {
  const mailOptions = {
    from: '"Raja and Karishma Royal Wedding" <prashantkrjha12@gmail.com>',
    to: TARGET_EMAILS.join(', '),
    subject: `💍 New RSVP: ${data.name} - Royal Wedding`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 25px; border: 2px solid #D4AF37; border-radius: 12px; background-color: #FAF5EB; color: #2A050D;">
        <h2 style="color: #671420; text-align: center; border-bottom: 2px solid #8B1E3F; padding-bottom: 12px;">Royal Wedding RSVP</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr><td style="padding: 8px; font-weight: bold;">Guest Name:</td><td style="padding: 8px;">${data.name}</td></tr>
          <tr style="background-color: #F3E5AB;"><td style="padding: 8px; font-weight: bold;">Mobile:</td><td style="padding: 8px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Total Guests:</td><td style="padding: 8px;">${data.guests}</td></tr>
          <tr style="background-color: #F3E5AB;"><td style="padding: 8px; font-weight: bold;">Status:</td><td style="padding: 8px; font-weight: bold; color: ${data.attending === 'yes' ? 'green' : 'red'};">${data.attending === 'yes' ? '✅ Attending with Joy' : '❌ Regretfully Declining'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Message:</td><td style="padding: 8px;">${data.message || 'None'}</td></tr>
          <tr style="background-color: #F3E5AB;"><td style="padding: 8px; font-weight: bold;">Time:</td><td style="padding: 8px;">${new Date().toLocaleString()}</td></tr>
        </table>
      </div>
    `
  };

  return await transporter.sendMail(mailOptions);
}


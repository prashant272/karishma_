import http from 'http';
import nodemailer from 'nodemailer';

const PORT = 3001;

// Nodemailer with your verified Google App Password
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

const server = http.createServer(async (req, res) => {
  // CORS Headers so browser can talk to it seamlessly
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/api/rsvp' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        console.log('📬 Received RSVP Submission:', data);

        const mailOptions = {
          from: '"Raja & Karishma Royal Wedding" <prashantkrjha12@gmail.com>',
          to: TARGET_EMAILS.join(', '),
          subject: `💍 New RSVP: ${data.name} - Raja & Karishma Royal Wedding`,
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

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Mail sent successfully:', info.response);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Mail sent!' }));
      } catch (err) {
        console.error('❌ Mail send error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Dedicated RSVP Mail Dispatcher listening on http://localhost:${PORT}`);
});


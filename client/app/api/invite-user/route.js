import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email,role,message } = await req.json();

  let transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'Invitation to Join as ' + role,
      text: message,
    });

    return new Response(JSON.stringify({ message: 'Invitation sent successfully', response:info.response }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in invite-user API:', error);
    return new Response(JSON.stringify({ error: 'Failed to send invitation', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
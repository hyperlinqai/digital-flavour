import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, service, message } = body;

        // Email to Admin
        const adminEmailHtml = `
            <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
                <h1 style="color: #F59E0B; margin-bottom: 20px;">New Contact Form Submission</h1>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                    </tr>
                    ${phone ? `<tr>
                        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
                    </tr>` : ''}
                    ${company ? `<tr>
                        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Company:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
                    </tr>` : ''}
                    ${service ? `<tr>
                        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Service:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
                    </tr>` : ''}
                </table>
                <div style="margin-top: 20px;">
                    <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                    <div style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
                        ${message}
                    </div>
                </div>
            </div>
        `;

        // Thank You Email to User
        const userEmailHtml = `
            <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #F59E0B; margin-bottom: 10px;">Thank You for Contacting Us!</h1>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6;">Hi ${name},</p>
                
                <p style="font-size: 16px; line-height: 1.6;">
                    Thank you for reaching out to Digital Flavour! We've received your message and our team will get back to you within 24 hours.
                </p>
                
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #333; margin-bottom: 10px;">Your Message Summary:</h3>
                    ${service ? `<p><strong>Service Interested:</strong> ${service}</p>` : ''}
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap; color: #666;">${message}</p>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6;">
                    In the meantime, feel free to explore our services or follow us on social media for the latest updates.
                </p>
                
                <div style="text-align: center; margin-top: 30px;">
                    <a href="https://digitalflavour.in" style="display: inline-block; background-color: #F59E0B; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                        Visit Our Website
                    </a>
                </div>
                
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
                
                <p style="font-size: 14px; color: #666; text-align: center;">
                    Best regards,<br/>
                    <strong>The Digital Flavour Team</strong><br/>
                    <a href="tel:+919111268785" style="color: #F59E0B;">+91 9111268785</a> | 
                    <a href="mailto:digiflavour243@gmail.com" style="color: #F59E0B;">digiflavour243@gmail.com</a>
                </p>
            </div>
        `;

        // Send email to admin
        const adminEmail = await resend.emails.send({
            from: 'Digital Flavour <marketing@digitalflavour.co>',
            to: ['dfsales03@gmail.com', 'digiflavour243@gmail.com'],
            subject: `New Inquiry from ${name}`,
            html: adminEmailHtml,
            replyTo: email,
        });

        // Send thank you email to user
        const userEmail = await resend.emails.send({
            from: 'Digital Flavour <marketing@digitalflavour.co>',
            to: [email],
            subject: 'Thank You for Contacting Digital Flavour!',
            html: userEmailHtml,
        });

        return NextResponse.json({
            success: true,
            adminEmail: adminEmail.data,
            userEmail: userEmail.data
        });
    } catch (error) {
        console.error('Resend Error:', error);
        return NextResponse.json({ error: 'Internal Server Error', details: error }, { status: 500 });
    }
}


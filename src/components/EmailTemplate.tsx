import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    service?: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    phone,
    company,
    service,
    message,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <h1 style={{ color: '#F59E0B' }}>New Contact Form Submission</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        {phone && <p><strong>Phone:</strong> {phone}</p>}
        {company && <p><strong>Company:</strong> {company}</p>}
        {service && <p><strong>Service Interested In:</strong> {service}</p>}
        <hr style={{ borderColor: '#ddd', margin: '20px 0' }} />
        <p><strong>Message:</strong></p>
        <div style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
            {message}
        </div>
    </div>
);

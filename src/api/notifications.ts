// Email notification system
export interface NotificationData {
  type: 'new_contact_submission' | 'form_error' | 'system_alert';
  data: any;
  timestamp?: string;
}

export interface EmailNotification {
  to: string[];
  subject: string;
  body: string;
  isHtml?: boolean;
}

// Admin email addresses
const ADMIN_EMAILS = [
  'agiliocap@gmail.com',
  // Add additional admin emails here
];

export const sendNotification = async (notification: NotificationData): Promise<boolean> => {
  try {
    const emailContent = generateEmailContent(notification);
    
    // In production, integrate with email service (SendGrid, AWS SES, etc.)
    // For now, we'll log the notification
    console.log('Email Notification:', {
      to: ADMIN_EMAILS,
      subject: emailContent.subject,
      body: emailContent.body,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Failed to send notification:', error);
    return false;
  }
};

const generateEmailContent = (notification: NotificationData): EmailNotification => {
  switch (notification.type) {
    case 'new_contact_submission':
      return {
        to: ADMIN_EMAILS,
        subject: 'New Contact Form Submission - Agilio Capital',
        body: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${notification.data.name}</p>
          <p><strong>Email:</strong> ${notification.data.email}</p>
          <p><strong>Company:</strong> ${notification.data.company || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${notification.data.phone || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${notification.data.service || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <blockquote>${notification.data.message}</blockquote>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <p><em>This is an automated notification from the Agilio Capital website contact form.</em></p>
        `,
        isHtml: true
      };
    
    case 'form_error':
      return {
        to: ADMIN_EMAILS,
        subject: 'Contact Form Error - Agilio Capital',
        body: `
          <h2>Contact Form Error</h2>
          <p>An error occurred while processing a contact form submission:</p>
          <pre>${JSON.stringify(notification.data, null, 2)}</pre>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `,
        isHtml: true
      };
    
    default:
      return {
        to: ADMIN_EMAILS,
        subject: 'System Notification - Agilio Capital',
        body: `
          <h2>System Notification</h2>
          <p>Type: ${notification.type}</p>
          <pre>${JSON.stringify(notification.data, null, 2)}</pre>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `,
        isHtml: true
      };
  }
};
// Contact form submission endpoint
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
  timestamp: string;
  source: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: string;
}

// Simulated database storage (in production, use a real database)
const contactSubmissions: ContactFormData[] = [];

export const submitContactForm = async (data: ContactFormData): Promise<ContactResponse> => {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        message: 'Name, email, and message are required fields.'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Please provide a valid email address.'
      };
    }

    // Generate unique ID
    const id = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store submission
    const submission = {
      ...data,
      id,
      timestamp: new Date().toISOString()
    };
    
    contactSubmissions.push(submission);

    // Log submission for admin tracking
    console.log('New contact form submission:', {
      id,
      name: data.name,
      email: data.email,
      company: data.company,
      service: data.service,
      timestamp: submission.timestamp
    });

    return {
      success: true,
      message: 'Your message has been sent successfully. We will respond within 24 hours.',
      id
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'An error occurred while sending your message. Please try again.'
    };
  }
};

export const getContactSubmissions = (): ContactFormData[] => {
  return contactSubmissions.sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
};

export const exportContactSubmissions = (): string => {
  const headers = ['ID', 'Name', 'Email', 'Company', 'Phone', 'Service', 'Message', 'Timestamp', 'Source'];
  const csvContent = [
    headers.join(','),
    ...contactSubmissions.map(submission => [
      submission.id || '',
      `"${submission.name}"`,
      submission.email,
      `"${submission.company || ''}"`,
      submission.phone || '',
      `"${submission.service || ''}"`,
      `"${submission.message.replace(/"/g, '""')}"`,
      submission.timestamp,
      submission.source
    ].join(','))
  ].join('\n');
  
  return csvContent;
};
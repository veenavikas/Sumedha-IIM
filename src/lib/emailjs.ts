import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'vmo9VfO9ZcshUCk3N',
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_jdjkqtj',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_u676edf',
  recipientEmail: 'deanacademics@sumedhaiim.com',
};

export interface ContactEnquiryParams {
  name: string;
  email: string;
  phone: string;
  title: string;
  message: string;
}

/**
 * Sends a contact enquiry email using EmailJS.
 * Service: service_jdjkqtj (info@sumedhaiim.com)
 * Template: template_u676edf
 * Recipient: deanacademics@sumedhaiim.com
 * Reply-To: visitor's submitted email
 */
export async function sendContactEnquiry(data: ContactEnquiryParams) {
  const templateParams: Record<string, string> = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    title: data.title,
    message: data.message,
    reply_to: data.email,
    to_email: EMAILJS_CONFIG.recipientEmail,
    recipient: EMAILJS_CONFIG.recipientEmail,
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, status: response.status, text: response.text };
  } catch (err: unknown) {
    console.error('EmailJS send error:', err);
    throw new Error('Failed to send message. Please try again or contact us directly.');
  }
}

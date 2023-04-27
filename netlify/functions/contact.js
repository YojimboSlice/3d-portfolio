import emailjs from 'emailjs/browser';

export default async event => {
  const { name, email, message } = JSON.parse(event.body);

  const serviceId = import.meta.EMAILJS_SERVICE_ID;
  const templateId = import.meta.EMAILJS_TEMPLATE_ID;
  const userId = import.meta.EMAILJS_USER_ID;

  const data = {
    from_name: name,
    to_name: 'JavaScript Mastery',
    from_email: email,
    to_email: 'jamesryanlan@gmail.com',
    message: message,
  };

  try {
    await emailjs.send(serviceId, templateId, data, userId);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};

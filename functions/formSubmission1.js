exports.handler = async function(event, context) {
  const formData = JSON.parse(event.body); 

  const { name, email, docLink } = formData;

  // You can now do something with this data (e.g., save it to a database, send an email, etc.)
  // For now, let's just log it
  console.log('Received form 1 submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Google Doc Link:', docLink);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form 1 submitted successfully' })
  };
};


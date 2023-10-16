
exports.handler = async function(event, context) {
  const formData = JSON.parse(event.body);

  const { interaction } = formData;

  // You can now do something with this data (e.g., save it to a database, send an email, etc.)
  // For now, let's just log it
  console.log('Received form 2 submission:');
  console.log('Interaction:', interaction);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form 2 submitted successfully' })
  };
};


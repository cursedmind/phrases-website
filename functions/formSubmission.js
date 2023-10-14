exports.handler = async (event, context) => {
  // Process the form submission data here
  // For example, send an email or save the data to a database

  // Respond with a success message
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Your information is received. We will revert back soon via email." })
  };
};


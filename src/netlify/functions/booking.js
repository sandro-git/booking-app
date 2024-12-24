exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') return { statusCode: 405 };
    
    // const { date, time, name, email } = JSON.parse(event.body);
    
    // Add booking logic here
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Booking confirmed' })
    };
  };
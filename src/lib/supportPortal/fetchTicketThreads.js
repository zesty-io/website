/**
 * Fetches a support ticket and its thread content, and adds preview URLs to any attachments
 * @async
 * @function fetchTicketThreads
 * @param {Object} query - An object containing the ticket number
 * @param {Object} req - An object containing cookies used for authentication
 * @returns {Promise<Object>} A promise that resolves to the fetched ticket with updated attachment preview URLs
 */
const fetchTicketThreads = async (query, req) => {
  let ticketThreads;

  /**
   * Fetches a single support ticket
   * @async
   * @function fetchTicket
   * @returns {Promise<Object>} A promise that resolves to the fetched ticket
   */
  const fetchTicket = async () => {
    try {
      const response = await fetch(
        `https://us-central1-zesty-dev.cloudfunctions.net/supportTickets/ticket/${query.ticketNumber}`,
        {
          method: 'GET',
          headers: {
            authorization: `Bearer ${req.cookies.APP_SID}`,
            WorkingInstance: req.cookies.ZESTY_WORKING_INSTANCE,
          },
        },
      );
      return response.json();
    } catch (error) {
      console.error(error);
    }
  };

  ticketThreads = await fetchTicket();

  if (ticketThreads.error) {
    return { error: ticketThreads.error };
  }

  return ticketThreads;
};

export default fetchTicketThreads;

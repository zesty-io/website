/**
 * Fetches a support ticket and its thread content, and adds preview URLs to any attachments
 * @async
 * @function fetchTicketThread
 * @param {Object} query - An object containing the ticket number
 * @param {Object} req - An object containing cookies used for authentication
 * @returns {Promise<Object>} A promise that resolves to the fetched ticket with updated attachment preview URLs
 */
const fetchTicketThread = async (query, req) => {
  let ticket;

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
          },
        },
      );
      return response.json();
    } catch (error) {
      console.error(error);
    }
  };

  ticket = await fetchTicket();

  /**
   * Adds preview URLs to any attachments in a given message item
   * @async
   * @function addAttachmentPreviews
   * @param {Object} item - A message item from the ticket thread
   * @returns {Promise} A promise that resolves when all attachments in the item have preview URLs added
   */
  const addAttachmentPreviews = async (item) => {
    if (item.attachments) {
      const attachmentPromises = item.attachments.map(async (attachment) => {
        try {
          const response = await fetch(
            'https://us-central1-zesty-dev.cloudfunctions.net/supportTickets/attachment',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${req.cookies.APP_SID}`,
              },
              body: JSON.stringify({
                href: attachment.href,
              }),
            },
          );
          const url = await response.json();
          attachment.previewurl = url;
        } catch (error) {
          console.error(error);
        }
      });
      await Promise.all(attachmentPromises);
    }
  };

  await Promise.all(ticket.threadContent.map(addAttachmentPreviews));

  return ticket;
};

export default fetchTicketThread;

/**
 * Adds a preview URL to the given attachment
 * @async
 * @function addAttachmentPreview
 * @param {Object} attachment - An attachment object
 * @returns {Promise} A promise that resolves when the attachment has a preview URL added
 */
const addAttachmentPreview = async ({ attachment, req }) => {
  try {
    const response = await fetch(
      'https://us-central1-zesty-dev.cloudfunctions.net/supportTickets/attachment',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${req.cookies.APP_SID}`,
          WorkingInstance: req.cookies.ZESTY_WORKING_INSTANCE,
        },
        body: JSON.stringify({
          href: attachment.href,
        }),
      },
    );
    const url = await response.json();

    // attachment.previewurl = url;
    return url;
  } catch (error) {
    console.error(error);
  }
};

export default addAttachmentPreview;

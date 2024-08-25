const B2 = require('backblaze-b2');
require('dotenv').config();

// Initialize B2 client
const b2 = new B2({
  applicationKeyId: process.env.B2_APPLICATION_KEY_ID,
  applicationKey: process.env.B2_APPLICATION_KEY,
});

// Function to upload a buffer (instead of a file path) to B2
async function uploadFileToB2(bucketId, fileBuffer, fileName) {
  try {
    // Authorize the B2 account
    await b2.authorize();

    // Get the upload URL
    const uploadUrlResponse = await b2.getUploadUrl({
      bucketId: bucketId,
    });

    const { uploadUrl, authorizationToken } = uploadUrlResponse.data;

    // Upload the buffer (segment)
    const uploadResponse = await b2.uploadFile({
      uploadUrl: uploadUrl,
      uploadAuthToken: authorizationToken,
      fileName: fileName, // The filename to be used for the uploaded file
      data: fileBuffer,   // Buffer containing the segment data
    });

    console.log(`File ${fileName} uploaded successfully to B2`);
    return uploadResponse.data;
  } catch (error) {
    console.error('Error uploading file to B2:', error.message);
    throw error;
  }
}

module.exports = { uploadFileToB2 };

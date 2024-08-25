
const { createClient } = require("@deepgram/sdk");
const fs = require("fs");
require('dotenv').config();  // Load environment variables from .env

// Create a Deepgram client using the API key
const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

const transcribeFileTest = async () => {
  try {
    // STEP 1: Read the local audio file (.mp3)
    const audioStream = fs.createReadStream("./output/output.mp3");  // Ensure correct path to your file

    // STEP 2: Transcribe the file using Deepgram SDK's latest method
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
      audioStream,  // Pass the file stream
      {
        model: "nova-2",  // Use the desired model for transcription (e.g., 'nova-2')
      }
    );

    // STEP 3: Handle errors, if any
    if (error) {
      throw error;
    }

    // STEP 4: Log the transcription result
    console.log("Transcription result:", result);

    // STEP 5: Optionally, save the result to a JSON file
    const transcriptFilePath = './output/test_transcript.json';
    fs.writeFileSync(transcriptFilePath, JSON.stringify(result, null, 2));
    console.log(`Transcript saved to ${transcriptFilePath}`);

  } catch (error) {
    console.error("Error during transcription:", error.message);
  }
};

// Run the test function
transcribeFileTest();

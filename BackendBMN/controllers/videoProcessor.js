async function processVideo(sbatId, io) {
  try {
    console.log(`[${new Date().toISOString()}] Starting video processing for sbatId: ${sbatId}`);

    io.emit("progress", { stage: "Fetching m3u8 URLs", progress: 0 });
    const apiResponse = await axios.get(
      `https://metabase.interviewbit.com/api/embed/card/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJxdWVzdGlvbiI6MjA2MDN9LCJwYXJhbXMiOnt9LCJleHAiOjE3MjU4MDc1MTJ9.yMRVwznv6WFxGETyCI6P1GNGWItqllM06PRW4b0wVHc/query`,
      { params: { sbat_id: sbatId } }
    );

    const m3u8Urls = apiResponse.data.data.rows.map((row) => row[0]);
    console.log(`[${new Date().toISOString()}] Fetched ${m3u8Urls.length} m3u8 URLs`);

    const allTsFilePaths = [];

    // Process each m3u8 URL
    for (let i = 0; i < m3u8Urls.length; i++) {
      const m3u8Url = m3u8Urls[i];
      io.emit("progress", { stage: `Processing m3u8 ${i + 1}`, progress: (i / m3u8Urls.length) * 50 });

      // Download and parse the m3u8 file
      const m3u8Response = await axios.get(m3u8Url);
      const parser = new m3u8Parser.Parser();
      parser.push(m3u8Response.data);
      parser.end();

      const baseUrl = m3u8Url.substring(0, m3u8Url.lastIndexOf("/") + 1);
      const segments = parser.manifest.segments;

      // Download and upload each segment
      for (let j = 0; j < segments.length; j++) {
        const segmentUrl = new URL(segments[j].uri, baseUrl).toString();

        // Fetch the segment
        const segmentResponse = await axios.get(segmentUrl, { responseType: "arraybuffer" });

        // Ensure that the data is valid (not undefined)
        if (!segmentResponse || !segmentResponse.data) {
          throw new Error(`Failed to fetch segment ${j} for m3u8 ${i}`);
        }

        const segmentBuffer = Buffer.from(segmentResponse.data);

        // Use a valid file name, for example `segment_sbatId_i_j.ts`
        const segmentName = `segment_${sbatId}_${i}_${j}.ts`;

        // Upload the segment to Backblaze B2 directly
        await uploadFileToB2(process.env.B2_BUCKET_ID, segmentBuffer, segmentName);

        allTsFilePaths.push(`file '${segmentName}'`);

        const progress = Math.round(50 + (i / m3u8Urls.length + j / segments.length / m3u8Urls.length) * 40);
        io.emit("progress", { stage: 'Downloading and uploading video segments', progress });
      }
    }

    io.emit("progress", { stage: "Segments uploaded to B2", progress: 90 });

    // After uploading all segments, continue with merging the files, generating transcripts, etc.

    io.emit("progress", { stage: "Complete", progress: 100 });
    return { message: 'All segments uploaded to B2 successfully' };
  } catch (error) {
    io.emit("progress", { stage: "Error", progress: 100, error: error.message });
    console.error('Error during video processing:', error.message);
    throw error;
  }
}

const axios = require("axios");
const { exec } = require("child_process");
const m3u8Parser = require("m3u8-parser");
const { uploadFileToB2 } = require("../config/b2Service");
const dotenv = require("dotenv");
dotenv.config();

async function processVideo(sbatId, io) {
  try {
    console.log(`[${new Date().toISOString()}] Starting video processing for sbatId: ${sbatId}`);

    io.emit("progress", { stage: "Fetching m3u8 URLs", progress: 0 });
    const apiResponse = await axios.get(
      `https://metabase.interviewbit.com/api/embed/card/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJxdWVzdGlvbiI6MjA2MDN9LCJwYXJhbXMiOnt9LCJleHAiOjE3MjU4MDc1MTJ9.yMRVwznv6WFxGETyCI6P1GNGWItqllM06PRW4b0wVHc/query`,
      { params: { sbat_id: sbatId } }
    );

    const m3u8Urls = apiResponse.data.data.rows.map((row) => row[0]);
    console.log(`[${new Date().toISOString()}] Fetched ${m3u8Urls.length} m3u8 URLs`);

    const allTsFilePaths = [];

    // Process each m3u8 URL
    for (let i = 0; i < m3u8Urls.length; i++) {
      const m3u8Url = m3u8Urls[i];
      io.emit("progress", { stage: `Processing m3u8 ${i + 1}`, progress: (i / m3u8Urls.length) * 50 });

      // Download and parse the m3u8 file
      const m3u8Response = await axios.get(m3u8Url);
      const parser = new m3u8Parser.Parser();
      parser.push(m3u8Response.data);
      parser.end();

      const baseUrl = m3u8Url.substring(0, m3u8Url.lastIndexOf("/") + 1);
      const segments = parser.manifest.segments;

      // Download and upload each segment
      for (let j = 0; j < segments.length; j++) {
        const segmentUrl = new URL(segments[j].uri, baseUrl).toString();

        // Fetch the segment
        const segmentResponse = await axios.get(segmentUrl, { responseType: "arraybuffer" });

        // Ensure that the data is valid (not undefined)
        if (!segmentResponse || !segmentResponse.data) {
          throw new Error(`Failed to fetch segment ${j} for m3u8 ${i}`);
        }

        const segmentBuffer = Buffer.from(segmentResponse.data);

        // Use a valid file name, for example `segment_sbatId_i_j.ts`
        const segmentName = `segment_${sbatId}_${i}_${j}.ts`;

        // Upload the segment to Backblaze B2 directly
        await uploadFileToB2(process.env.B2_BUCKET_ID, segmentBuffer, segmentName);

        allTsFilePaths.push(`file '${segmentName}'`);

        const progress = Math.round(50 + (i / m3u8Urls.length + j / segments.length / m3u8Urls.length) * 40);
        io.emit("progress", { stage: 'Downloading and uploading video segments', progress });
      }
    }

    io.emit("progress", { stage: "Segments uploaded to B2", progress: 90 });

    // After uploading all segments, continue with merging the files, generating transcripts, etc.

    io.emit("progress", { stage: "Complete", progress: 100 });
    return { message: 'All segments uploaded to B2 successfully' };
  } catch (error) {
    io.emit("progress", { stage: "Error", progress: 100, error: error.message });
    console.error('Error during video processing:', error.message);
    throw error;
  }
}

module.exports = { processVideo };
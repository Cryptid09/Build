"use client";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

function UploadComponent({ setStatus, setNotesLink, setError }) {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("No file selected.");
      setStatus("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    setUploadStatus("Uploading...");
    setStatus("Uploading...");

    try {
      const response = await axios.post("/api/videos/upload", formData);
      setUploadStatus("Upload successful. Processing...");
      setStatus("Upload successful. Processing...");
      transcribe(response.data.filename);
    } catch (error) {
      setUploadStatus("Upload failed: " + error.message);
      setStatus("Upload failed: " + error.message);
      setError("Upload failed: " + error.message);
    }
  };

  const transcribe = async (filename) => {
    try {
      const response = await axios.post("/api/transcription/transcribe", {
        filename,
      });
      setUploadStatus("Transcription successful. Generating notes...");
      setStatus("Transcription successful. Generating notes...");
      generateNotes(response.data.transcript, response.data.videoId);
    } catch (error) {
      setUploadStatus("Transcription failed: " + error.message);
      setStatus("Transcription failed: " + error.message);
      setError("Transcription failed: " + error.message);
    }
  };

  const generateNotes = async (transcript, videoId) => {
    try {
      const response = await axios.post("/api/notes/generate-notes", {
        transcript,
        videoId,
      });
      setUploadStatus("Notes generation successful.");
      setStatus("Notes generation successful.");
      setNotesLink(response.data.notesLink);
    } catch (error) {
      setUploadStatus("Notes generation failed: " + error.message);
      setStatus("Notes generation failed: " + error.message);
      setError("Notes generation failed: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-lg">
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-600 rounded-md bg-[#1f1e1ead] text-white"
      />
      <div className="flex gap-7 justify-center">
        <button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={
            uploadStatus === "Uploading..." || uploadStatus === "Processing..."
          }
          className="bg-gray-400 rounded-lg p-2 text-black focus:outline-none"
        >
          <FileUploadOutlinedIcon />
          {uploadStatus === "Uploading..." ? (
            <CircularProgress size={24} />
          ) : (
            "Upload Video"
          )}
        </button>
        <button className="bg-white p-2 rounded-lg text-black">
          <PlayArrowTwoToneIcon className="mb-1" />
          Watch Demo
        </button>
      </div>
    </div>
  );
}

export default UploadComponent;


import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { useLogin } from "@/context";
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PostLoginNavbar from '@/components/postlogin/Navbar';
import MicIcon from '@mui/icons-material/Mic';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import io from "socket.io-client";

const Main = () => {
  const { isLoggedIn, user, isLoading } = useLogin();
  const [videoLink, setVideoLink] = useState("");
  const [notes, setNotes] = useState(null);
  const [notesList, setNotesList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, isLoading, router]);

  useEffect(() => {
    if (isLoggedIn && user) {
      fetchNotesList();

      const socket = io(BACKEND_URL, {
        withCredentials: true,
        transports: ['websocket', 'polling'],
      });

      socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
      });

      socket.on('connect_error', (error) => {
        console.error('Socket.IO connection error:', error);
      });

      socket.on('progress', (data) => {
        setProgress(data.progress);
      });

      return () => {
        socket.disconnect(); // Cleanup on component unmount
      };
    }
  }, [isLoggedIn, user, BACKEND_URL]);

  const fetchNotesList = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/notes/${user._id}`, { withCredentials: true });
      setNotesList(response.data.notesList);
    } catch (error) {
      console.error("Error fetching notes list:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const urlPattern = /\/class\/(\d+)\//;
      const match = videoLink.match(urlPattern);

      if (match && match[1]) {
        const sbatId = match[1]; // Extracted sbatId
        const response = await axios.post(`${BACKEND_URL}/process-video`, {
          sbatId,
          userId: user._id,
        }, { withCredentials: true });
        setNotes(response.data.notes); // Set the notes on success
        setModalOpen(false); // Close modal after submission

        fetchNotesList(); // Refresh the notes list after note generation
      } else {
        console.error("Invalid URL. Couldn't extract sbatId.");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const handleNoteClick = async (noteId) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/notes/${noteId}`, { withCredentials: true });
      setNotes(response.data.notes); // Display the selected note
    } catch (error) {
      console.error("Error fetching the note:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn || !user) {
    return null; // This will prevent a flash of unauthenticated content
  }

  return (
    <>
      <PostLoginNavbar />
      <div className="relative font-sans min-h-screen bg-[#ebebe4] dark:bg-[#000000da] dark:text-white text-black flex justify-center p-4">
        {/* Main content area */}
        <div className="md:w-3/4 w-svw flex justify-center items-center pl-8 p-4">
          <div className="w-full max-w-2xl p-6 bg-white dark:bg-[#181818] mt-12 md:mt-30 shadow-lg rounded-lg">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">New note</h2>
              <p className="text-sm text-gray-500 mb-4">
                Record audio, upload audio, or use a YouTube/Video URL
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center space-x-2 dark:bg-[#3f3f3f] bg-white shadow-md p-4 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
                  <MicIcon className="text-red-500" />
                  <span className="font-medium">Record audio</span>
                </button>
                <button
                  className="flex items-center space-x-2 dark:bg-[#3f3f3f] bg-white shadow-md p-4 rounded-lg hover:bg-gray-100 w-full sm:w-auto"
                  onClick={() => setModalOpen(true)}
                >
                  <Image src="/Sl.svg" alt="Discord" width={39} height={30} />
                  <span className="font-medium">Upload video</span>
                </button>
                <button className="flex items-center space-x-2 dark:bg-[#3f3f3f] bg-white shadow-md p-4 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
                  <CloudUploadIcon className="text-blue-500" />
                  <span className="font-medium">Upload audio</span>
                </button>
              </div>
            </div>

            {/* Progress bar for video processing */}
            <div className="my-4">
              <h2 className="text-xl font-semibold mb-4">Processing Progress</h2>
              <div className="w-full bg-gray-200 rounded-full">
                <div
                  className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: `${progress}%` }}
                >
                  {progress}%
                </div>
              </div>
            </div>

            {/* Display Notes in Markdown Format */}
            {notes && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Generated Notes</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none p-4 bg-white dark:bg-[#4c4b4b] rounded-lg shadow-lg">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{notes}</ReactMarkdown>
                </div>
              </div>
            )}

            {/* Modal for Video Link Input */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                  <h2 className="text-xl font-semibold mb-4">Upload Video Link</h2>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="url"
                      placeholder="Enter video link"
                      className="p-2 border dark:bg-[#3f3f3f] bg-white w-full rounded-md"
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                    />
                    <div className="flex justify-end mt-4">
                      <button
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => setModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Upload and Process
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div className="bg-gray-100 dark:bg-gray-900 p-4">
              <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">My Notes</h3>
              <ul className="space-y-4">
                {notesList.length > 0 ? (
                  notesList.map((note) => (
                    <li
                      key={note._id}
                      className="cursor-pointer text-blue-500 hover:text-blue-700"
                      onClick={() => handleNoteClick(note._id)}
                    >
                      {note.title || `Note for ${note.sbatId}`}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 dark:text-gray-400">No notes available</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
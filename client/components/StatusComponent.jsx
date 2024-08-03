import { Typography } from "@mui/material";
import Loader from "./Loader";
import { FileDownloadOutlined } from "@mui/icons-material";
function StatusComponent({ status, notesLink, error }) {
  return (
    <div className="flex font-Noto flex-col w-screen items-center">
      <Typography
        variant="h5"
        className="text-white font-bold text-xl relative font-Noto pb-5"
      >
        Status
      </Typography>
      {error ? (
        <Typography variant="body1" className="text-red-500 mb-2">
          {error}
        </Typography>
      ) : notesLink ? (
        <a
          href={notesLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 bg-[#201f1f] text-white py-2 px-4 rounded-lg hover:bg-[#131212f5] transition duration-200"
        >
          Download <FileDownloadOutlined />
        </a>
      ) : (
        <>
          <Typography variant="body1" className="text-gray-400 mb-2">
            {status ? status : "Nothing uploaded yet."}
          </Typography>
          {status === "Processing..." && <Loader />}
        </>
      )}
    </div>
  );
}

export default StatusComponent;

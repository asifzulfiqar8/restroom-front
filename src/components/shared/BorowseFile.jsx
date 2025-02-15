/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsImages } from "react-icons/bs";
// import { handleFileChange } from "../../../utils/feature";
// import ImageIcon from "../../../assets/svgs/stepper/ImageIcon";

const BrowseFile = ({ setFile }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // Handle drag over event
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };
  // Handle drop event
  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      convertToBase64(droppedFile, setFile);
      previewImage(droppedFile);
    }
  };

  const handleFileChange = ({ event, setFile, previewImage }) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      convertToBase64(selectedFile, setFile);
      previewImage(selectedFile);
    }
  };

  const convertToBase64 = (file, setFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFile(reader.result); // Set Base64 string here
    };
  };

  // Preview image function
  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  return (
    <div
      className={`mt-3 border border-dashed rounded-lg p-4 h-[200px] md:h-[290px] grid place-items-center relative ${
        dragActive
          ? "border-primary-lightBlue bg-[rgba(200,240,255)]"
          : "border-primary-lightBlue bg-[rgba(235,250,255)]"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center gap-2">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Uploaded preview"
            className="w-full h-[165px] md:h-[250px] object-cover rounded-lg"
          />
        ) : (
          <>
            <BsImages />
            <p className="text-primary-lightBlue text-sm font-semibold leading-none">
              Drag and Drop Files here
            </p>
            <p className="text-primary-lightBlue text-sm font-semibold leading-none">
              Or
            </p>
            <BrowseFileBtn
              onFileChange={(e) =>
                handleFileChange({
                  event: e,
                  setFile,
                  previewImage,
                })
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BrowseFile;

const BrowseFileBtn = ({ onFileChange }) => {
  return (
    <button className="relative px-4 py-2 cursor-pointer rounded-lg bg-primary-lightBlue text-primary font-semibold">
      Browse File
      <input
        type="file"
        id="fileInput"
        className="absolute inset-0 cursor-pointer opacity-0"
        onChange={onFileChange}
      />
    </button>
  );
};

import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function UploadCSV() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full md:max-w-3xl mx-aut mt-12">
      <h3 className="text-gray-700 mb-4 font-semibold text-sm uppercase">
        Import your spreadsheet file
      </h3>
      <label
        htmlFor="file-upload"
        className="border border-dashed border-gray-300 rounded-lg w-full h-44 bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors"
      >
        <UploadCloud size={40} className="text-gray-400 mb-4" />
        <p className="text-gray-500 text-sm">
          Click to upload or{" "}
          <span className="text-primary font-semibold">drag and drop</span>
        </p>
        <p className="text-gray-400 text-xs mt-1">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </p>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      {file && (
        <p className="text-center mt-4 text-green-500">
          File selected: {file.name}
        </p>
      )}
      <div className="flex justify-between mt-8">
        <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
          Cancel
        </button>
        <button
          className="bg-primary text-white px-8 py-2 rounded-md disabled:opacity-50 hover:bg-blue-600 transition-colors"
          disabled={!file}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

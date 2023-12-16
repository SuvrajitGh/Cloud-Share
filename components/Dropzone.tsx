"use client";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import DropzoneComponent, { FileRejection } from "react-dropzone";

interface UploadedFile {
  id: number;
  name: string;
  size: number;
  uploadedDate: string;
  lastUpdatedDate: string; // Fix the property name
  uploadedBy: string;
}

const maxSize = 20971520;

const Dropzone = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const getFileType = (fileName: string): string => {
    const extension = fileName.split(".").pop()?.toLowerCase() || "";
    const imageExtensions = ["jpg", "jpeg", "png", "gif"];
    const documentExtensions = ["pdf", "doc", "docx", "txt"];

    if (imageExtensions.includes(extension)) {
      return "image";
    } else if (documentExtensions.includes(extension)) {
      return "document";
    } else {
      return "unknown";
    }
  };

  const handleDrop = (
    acceptedFiles: File[],
    fileRejections: FileRejection[]
  ): void => {
    const currentDate = new Date();
    const newFiles: UploadedFile[] = acceptedFiles.map((file) => ({
      id: Date.now(),
      name: file.name,
      size: file.size,
      uploadedDate: currentDate.toLocaleDateString(),
      lastUpdatedDate: currentDate.toLocaleDateString(),
      uploadedBy: "John Doe",
    }));

    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const handleDelete = (id: number): void => {
    const updatedFiles = uploadedFiles.filter((file) => file.id !== id);
    setUploadedFiles(updatedFiles);
  };

  return (
    <div className={uploadedFiles.length > 0 ? 'overflow-hidden' : ''}>
      <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={handleDrop}>
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragReject,
          fileRejections,
        }): JSX.Element => {
          const isFileTooLarge =
            fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

          return (
            <section className="m-4">
              <div
                {...getRootProps()}
                className={cn(
                  "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center",
                  isDragActive
                    ? "bg-[#6148bd] text-white animate-pulse"
                    : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
                )}
              >
                {!isDragActive && "Click here to drop a file to upload!"}
                {isDragActive && !isDragReject && "Drop to upload this file!"}
                {isDragReject && "File type not accepted, sorry!"}
                {isFileTooLarge && (
                  <div className="text-danger mt-2">File is too large</div>
                )}
              </div>
            </section>
          );
        }}
      </DropzoneComponent>

      {uploadedFiles.length > 0 && (
        <section className="container mx-auto px-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Files uploaded
            </h2>
          </div>
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:mx-8">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>File Type</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        File Size
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date uploaded
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Last Updated
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Uploaded by
                      </th>
                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {uploadedFiles.map((file) => (
                      <tr key={file.id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div
                              className={`flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800 filetype ${getFileType(
                                file.name
                              )}`}
                            >
                              {/* File icon or type indicator */}
                              {getFileType(file.name) === "image" && (
                                <span>📷</span>
                              )}
                              {getFileType(file.name) === "document" && (
                                <span>📝</span>
                              )}
                              {getFileType(file.name) === "unknown" && (
                                <span>📂</span>
                              )}
                            </div>
                            {file.name}
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-normal text-slate-500 dark:text-gray-300 whitespace-nowrap">
                          {file.size} bytes
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {file.uploadedDate}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {file.lastUpdatedDate}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {file.uploadedBy}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            onClick={() => handleDelete(file.id)}
                            className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
                          >
                            <Trash2 size={20} strokeWidth={1.25} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Dropzone;

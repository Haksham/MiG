"use client";
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Resume() {
  // Convert Google Drive link to embeddable format
  const driveFileId = "1APoFsJY1jFKiZ2BARjQ8QH8WVcSx6I_h";
  const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;
  const downloadUrl = `https://drive.google.com/file/d/${driveFileId}/view?usp=sharing`;

  return (
    <div className="bg-white w-full flex flex-col border-2">
      <div className="min-h-screen py-10" style={{ backgroundColor: '#faefdd' }}>
        <div className="max-w-6xl mx-auto px-2 md:px-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className={`${pacifico.className} text-6xl font-bold mb-4 text-gray-800`}>Resume</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Download or view my professional resume below
            </p>
            
            {/* Download Button */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
              
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 border-2 border-gray-800 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                View Full Screen
              </a>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
              <h2 className="text-lg font-medium">Resume Preview</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-300">PDF Document</span>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="relative" style={{ height: '80vh' }}>
              <iframe
                src={embedUrl}
                className="w-full h-full border-0"
                title="Resume PDF"
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
              
              {/* Fallback message */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 mb-2">PDF Preview</p>
                  <p className="text-sm text-gray-500">Click download to view the full resume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
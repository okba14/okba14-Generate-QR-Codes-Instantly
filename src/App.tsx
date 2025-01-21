import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Toaster, toast } from 'react-hot-toast';
import {
  QrCode,
  Download,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Send,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [input, setInput] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGenerate = () => {
    if (!input) {
      toast.error('Please enter a value to generate QR code');
      return;
    }
    setQrValue(input);
    toast.success('QR Code generated successfully!');
  };

  const handleDownload = () => {
    if (!qrValue) {
      toast.error('Generate a QR code first');
      return;
    }
    
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = url;
      link.click();
      toast.success('QR Code downloaded successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
      <Toaster position="top-right" />
      
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <QrCode className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">QR_Dz</span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex justify-center space-x-4 py-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Generate QR Codes Instantly</h1>
          <p className="text-lg text-purple-200">Create QR codes for URLs, text, or anything you need</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl">
            <div className="mb-6">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter URL or text..."
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-400/30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleGenerate}
                className="flex-1 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <QrCode className="h-5 w-5" />
                Generate QR Code
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="h-5 w-5" />
                Download
              </button>
            </div>

            {qrValue && (
              <div className="flex justify-center bg-white p-8 rounded-lg">
                <QRCodeCanvas
                  value={qrValue}
                  size={256}
                  level="H"
                  includeMargin={true}
                />
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600/20 backdrop-blur-sm p-6 rounded-lg flex items-center gap-4 hover:bg-green-600/30 transition-colors"
            >
              <MessageCircle className="h-8 w-8" />
              <div>
                <h3 className="font-semibold text-lg">WhatsApp Support</h3>
                <p className="text-sm text-purple-200">Get instant help via WhatsApp</p>
              </div>
            </a>

            <a
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600/20 backdrop-blur-sm p-6 rounded-lg flex items-center gap-4 hover:bg-blue-600/30 transition-colors"
            >
              <Send className="h-8 w-8" />
              <div>
                <h3 className="font-semibold text-lg">Telegram Channel</h3>
                <p className="text-sm text-purple-200">Join our Telegram community</p>
              </div>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-200">Created with ❤️ by Your Developer Name</p>
          <p className="text-sm text-purple-300 mt-2">© 2024 QR_Dz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
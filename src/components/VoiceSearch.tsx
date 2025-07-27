import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';

interface VoiceSearchProps {
  onVoiceResult: (text: string) => void;
}

export function VoiceSearch({ onVoiceResult }: VoiceSearchProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'hi-IN'; // Hindi language support
      
      recognitionInstance.onstart = () => {
        setIsListening(true);
      };
      
      recognitionInstance.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
        
        if (event.results[current].isFinal) {
          onVoiceResult(transcript);
          setTranscript('');
        }
      };
      
      recognitionInstance.onend = () => {
        setIsListening(false);
      };
      
      setRecognition(recognitionInstance);
    }
  }, [onVoiceResult]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`p-3 rounded-full transition-all duration-300 ${
          isListening 
            ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/50' 
            : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-110'
        }`}
      >
        {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
      </button>
      
      {isListening && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg border border-gray-600 min-w-48">
          <div className="flex items-center space-x-2 mb-2">
            <Volume2 className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium">Listening...</span>
          </div>
          {transcript && (
            <div className="text-sm text-gray-300 italic">
              "{transcript}"
            </div>
          )}
          <div className="text-xs text-gray-400 mt-1">
            Try: "Pyaaz 5 kilo chahiye" or "Tomato fresh supplier"
          </div>
        </div>
      )}
    </div>
  );
}
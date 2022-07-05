import { useState } from 'react';

const useCopyToClipboard = () => {
  const [bufferText, setBufferText] = useState<string | null>(null);

  const copyTextToClipboard = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setBufferText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setBufferText(null);
      return false;
    }
  };

  return { bufferText, copyTextToClipboard };
};

export default useCopyToClipboard;
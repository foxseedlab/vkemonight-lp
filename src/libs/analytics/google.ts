declare global {
  interface Window {
    sendGAEvent?: (
      eventName: string,
      parameters: Record<string, string | number | boolean>,
    ) => void;
  }
}

export default function sendGAEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean>,
) {
  const attemptSend = (retryCount = 0) => {
    if (typeof window.sendGAEvent === 'function') {
      window.sendGAEvent(eventName, parameters);
      return;
    }

    if (retryCount < 3) {
      console.log(`sendGAEvent not ready, retrying... (${retryCount + 1}/3)`);
      setTimeout(() => attemptSend(retryCount + 1), 100);
    } else {
      console.warn('sendGAEvent is not available after retries');
    }
  };

  attemptSend();
}

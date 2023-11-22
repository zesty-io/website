const { useEffect } = require('react');
const { useState } = require('react');

export function animateStreaming({ chatHistory, scrollableRef }) {
  const [typedText, setTypedText] = useState('');
  useEffect(() => {
    let currentIndex = 0;
    const lastBotResponse =
      chatHistory[chatHistory.length - 1].type === 'bot'
        ? chatHistory[chatHistory.length - 1]
        : null;

    let text = '';

    const typeNextCharacter = () => {
      scrollableRef.current.scrollTop = scrollableRef.current?.scrollHeight;

      if (currentIndex < lastBotResponse?.message.length) {
        text += lastBotResponse?.message.charAt(currentIndex);
        setTypedText(text);
        currentIndex++;
        setTimeout(typeNextCharacter, 1); // Adjust the delay to control typing speed
      }
    };

    if (lastBotResponse) {
      typeNextCharacter();
    }
  }, [chatHistory]);

  return {
    typedText,
  };
}

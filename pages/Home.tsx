import { useState } from 'react';

export function Home() {
  const [note, setNote] = useState('');

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <h1>TherapyNote AI</h1>
      <textarea value={note} onChange={handleNoteChange} />
    </div>
  );
}
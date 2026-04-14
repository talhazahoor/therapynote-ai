import { useState } from 'react';

interface NoteProps {
  note: string;
}

export function Note({ note }: NoteProps) {
  const [summary, setSummary] = useState('');

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  return (
    <div>
      <h2>Note</h2>
      <p>{note}</p>
      <h2>Summary</h2>
      <textarea value={summary} onChange={handleSummaryChange} />
    </div>
  );
}
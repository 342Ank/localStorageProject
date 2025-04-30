import { useEffect, useState } from 'react';
import { getNotes } from '../utils/storage';


export default function NotesList() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const allNotes = getNotes();
      setNotes(allNotes);
    } catch (e) {
      setError(e.message);
    }
  }, []); // Why useEffect to sync storage → state.

  return (
    <div className="container mt-4">
      <h2>Your Notes</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {notes.map((note, idx) => (
          <li key={idx} className="list-group-item">
            <strong>{note.title}</strong>
            <p className="mb-0">{note.content.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

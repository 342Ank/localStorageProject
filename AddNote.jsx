import { useState } from 'react';
import { saveNote } from '../utils/storage';



export default function AddNote({ onNoteAdded }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Why show spinner here
    setError(null);
    try {
      saveNote({ title, content });
      onNoteAdded();
      setTitle('');
      setContent('');
    } catch (e) {
      setError(e.message); // Why display error banner
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Note</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary my-3" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
}

// Why I chose useState + this submit handler: It allows controlled form state and updates UI immediately.

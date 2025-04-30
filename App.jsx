import { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';



export default function App() {
  const [view, setView] = useState('add');
  const [refresh, setRefresh] = useState(false);
  

  return (
    
    <div className="container mt-3 bg-dark ">
      <div className="btn-group mb-4 my-3">
        <button
          className={`btn btn-outline-primary ${view === 'add' ? 'active' : ''}`}
          onClick={() => setView('add')}
        >
          Add Note
        </button>
        <button
          className={`btn btn-outline-primary ${view === 'list' ? 'active' : ''}`}
          onClick={() => setView('list')}
        >
          View Notes
        </button>
      </div>

      {view === 'add' ? (
        <AddNote onNoteAdded={() => setRefresh(!refresh)} />
      ) : (
        <NotesList key={refresh} />
      )}
    </div>
    
  );
}

// Why this nav approach for simplicity: Simple buttons + toggle logic = no need for full routing.

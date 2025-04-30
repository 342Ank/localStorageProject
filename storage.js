const STORAGE_KEY = 'notes_app_notes';

export const getNotes = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    throw new Error("Failed to load notes");
  }
};

export const saveNote = (note) => {
  try {
    const notes = getNotes();
    notes.push(note);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    throw new Error("Failed to save note");
  }
};

// Why localStorage + key naming: LocalStorage is easy for small apps, and one key keeps data management simple.

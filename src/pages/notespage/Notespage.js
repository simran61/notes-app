import "./Notespage.css";
import { NoteEditor } from "../../components";
import { Link } from "react-router-dom";
import { useNotes } from "../../contexts";

function Notespage() {
  const { notes } = useNotes();
  return (
    <div className="notes-page">
      <div className="notes-nav-bar">
        <Link to="/notes" className="nav-link txt_link">
          Home
        </Link>
        <Link to="/trash" className="nav-link txt_link">
          Trash
        </Link>
        <Link to="/archive" className="nav-link txt_link">
          Archive
        </Link>
        <Link to="/labels" className="nav-link txt_link">
          Labels
        </Link>
      </div>
      <NoteEditor />
      <div className="notes-container">
        {notes.map((note) => (
          <div
            className="note-container"
            style={{ backgroundColor: note.bgcolor }}
          >
            <p className="note-text">
              <b>Title:</b>
              {note.title}
            </p>
            <p className="note-text">
              <b>Description:</b>
              {note.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Notespage };

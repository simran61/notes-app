import "./NoteEditor.css";
import { useNote, useNotes } from "../../contexts";

function NoteEditor() {
  const { noteDispatch, bgcolor, title, description, label, priority } =
    useNote();
  const { notesDispatch } = useNotes();

  return (
    <>
      <div className="note-editor" style={{ backgroundColor: bgcolor }}>
        <h3>Add New Note..</h3>
        <input
          className="note-title"
          value={title}
          type="text"
          placeholder="Note Title"
          onChange={(e) =>
            noteDispatch({ type: "TITLE", payload: e.target.value })
          }
        />
        <textarea
          className="note-desc"
          value={description}
          placeholder="Note Description"
          onChange={(e) =>
            noteDispatch({ type: "DESCRIPTION", payload: e.target.value })
          }
        ></textarea>
        <div className="note-features">
          {/* TODO: for future use */}
          {/* <div className="note-features" style={{ backgroundColor: "white" }}> */}
          <label>
            Background Color:
            <input
              type="text"
              value={bgcolor}
              placeholder="#6a5acd (hexcode only)"
              onChange={(e) =>
                noteDispatch({ type: "BGCOLOR", payload: e.target.value })
              }
            />
          </label>
          <label>
            {" "}
            Label
            <input
              type="text"
              value={label}
              placeholder="Work"
              onChange={(e) =>
                noteDispatch({ type: "LABEL", payload: e.target.value })
              }
            />
          </label>
          <br />
          <label>Select Priority:</label>
          <label>
            <input
              type="radio"
              name="priority"
              onChange={(e) =>
                noteDispatch({ type: "PRIORITY", payload: "high" })
              }
            />
            High
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              onChange={(e) =>
                noteDispatch({ type: "PRIORITY", payload: "low" })
              }
            />
            Low
          </label>
          <br />
          <button
            className="txt_link_btn btn shadow mr_sm"
            onClick={() => {
              notesDispatch({
                type: "ADD_NOTE",
                payload: {
                  title: title,
                  description: description,
                  bgcolor: bgcolor,
                  label: label,
                  priority: priority,
                },
              });
              noteDispatch({ type: "RESET" });
            }}
          >
            Add note
          </button>
          <button
            className="txt_link_btn btn shadow mr_sm"
            onClick={() => noteDispatch({ type: "RESET" })}
          >
            Reset Note
          </button>
        </div>
      </div>
    </>
  );
}

export { NoteEditor };

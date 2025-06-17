export async function getAllNotes(req, res) {
    res.status(200).json({ message: "Retrieved all notes successfully" });
}

export async function createNote(req, res) {
    res.status(201).json({ message: "Note created successfully", note: req.body });
}

export async function updateNote(req, res) {
    res.status(200).json({ message: `Note with ID ${req.params.id} updated successfully`, note: req.body });
}

export async function deleteNote(req, res) {
    res.status(200).json({ message: `Note with ID ${req.params.id} deleted successfully` });
}
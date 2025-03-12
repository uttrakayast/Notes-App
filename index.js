document.addEventListener("DOMContentLoaded", function() {
    let notepad = document.getElementById("textInput");

    if (notepad) {
        notepad.value = localStorage.getItem("notepadStorage") || ""; // Load saved text

        notepad.addEventListener("input", function() {
            let notepadText = notepad.value;
            console.log("Saving:", notepadText);
            localStorage.setItem("notepadStorage", notepadText);
        });
    } else {
        console.error("Textarea with ID 'textInput' not found.");
    }
});

package com.prepverse.backend.controller;

import com.prepverse.backend.model.Note;
import com.prepverse.backend.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable Long id) {
        Note note = noteService.getNoteById(id).orElseThrow(() -> new RuntimeException("Note not found"));
        return ResponseEntity.ok(note);
    }

    @PostMapping
    public Note createNote(@RequestParam Long userId, @RequestParam Long questionId, @RequestBody String content) {
        return noteService.createNote(userId, questionId, content);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody String content) {
        Note updatedNote = noteService.updateNote(id, content);
        return ResponseEntity.ok(updatedNote);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Note>> getNotesByUser(@PathVariable Long userId) {
        List<Note> notes = noteService.getNotesByUser(userId);
        return ResponseEntity.ok(notes);
    }

    @GetMapping("/question/{questionId}")
    public ResponseEntity<List<Note>> getNotesByQuestion(@PathVariable Long questionId) {
        List<Note> notes = noteService.getNotesByQuestion(questionId);
        return ResponseEntity.ok(notes);
    }
}

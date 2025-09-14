package com.prepverse.backend.repository;

import com.prepverse.backend.model.Note;
import com.prepverse.backend.model.Question;
import com.prepverse.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByUser(User user);
    List<Note> findByQuestion(Question question);
}

package com.prepverse.backend.controller;

import com.prepverse.backend.model.Contest;
import com.prepverse.backend.model.UserContestResult;
import com.prepverse.backend.service.ContestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contests")
public class ContestController {

    @Autowired
    private ContestService contestService;

    @GetMapping
    public List<Contest> getAllContests() {
        return contestService.getAllContests();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contest> getContestById(@PathVariable Long id) {
        Contest contest = contestService.getContestById(id).orElseThrow(() -> new RuntimeException("Contest not found"));
        return ResponseEntity.ok(contest);
    }

    @PostMapping
    public Contest createContest(@RequestBody Contest contest) {
        return contestService.createContest(contest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Contest> updateContest(@PathVariable Long id, @RequestBody Contest contestDetails) {
        Contest updatedContest = contestService.updateContest(id, contestDetails);
        return ResponseEntity.ok(updatedContest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContest(@PathVariable Long id) {
        contestService.deleteContest(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{contestId}/submit/{userId}")
    public ResponseEntity<UserContestResult> submitContest(@PathVariable Long contestId, @PathVariable Long userId, @RequestParam Integer score) {
        UserContestResult result = contestService.submitContest(contestId, userId, score);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/results/user/{userId}")
    public ResponseEntity<List<UserContestResult>> getUserContestResults(@PathVariable Long userId) {
        List<UserContestResult> results = contestService.getUserContestResults(userId);
        return ResponseEntity.ok(results);
    }
}

package com.prepverse.backend.service;

import com.prepverse.backend.model.Contest;
import com.prepverse.backend.model.auth.User;
import com.prepverse.backend.model.UserContestResult;
import com.prepverse.backend.repository.ContestRepository;
import com.prepverse.backend.repository.UserContestResultRepository;
import com.prepverse.backend.repository.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ContestService {

    @Autowired
    private ContestRepository contestRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserContestResultRepository userContestResultRepository;

    public List<Contest> getAllContests() {
        return contestRepository.findAll();
    }

    public Optional<Contest> getContestById(Long id) {
        return contestRepository.findById(id);
    }

    public Contest createContest(Contest contest) {
        return contestRepository.save(contest);
    }

    public Contest updateContest(Long id, Contest contestDetails) {
        Contest contest = contestRepository.findById(id).orElseThrow(() -> new RuntimeException("Contest not found"));
        contest.setName(contestDetails.getName());
        contest.setStartTime(contestDetails.getStartTime());
        contest.setEndTime(contestDetails.getEndTime());
        contest.setQuestions(contestDetails.getQuestions());
        return contestRepository.save(contest);
    }

    public void deleteContest(Long id) {
        contestRepository.deleteById(id);
    }

    public UserContestResult submitContest(Long contestId, Long userId, Integer score) {
        Contest contest = contestRepository.findById(contestId).orElseThrow(() -> new RuntimeException("Contest not found"));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        UserContestResult result = new UserContestResult();
        result.setContest(contest);
        result.setUser(user);
        result.setScore(score);
        result.setSubmissionTime(LocalDateTime.now());

        return userContestResultRepository.save(result);
    }

    public List<UserContestResult> getUserContestResults(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return userContestResultRepository.findByUser(user);
    }
}

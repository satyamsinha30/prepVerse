package com.prepverse.backend.repository;

import com.prepverse.backend.model.auth.User;
import com.prepverse.backend.model.UserContestResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserContestResultRepository extends JpaRepository<UserContestResult, Long> {
    List<UserContestResult> findByUser(User user);
}

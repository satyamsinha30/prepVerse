package com.prepverse.backend.repository;

import com.prepverse.backend.model.PlannerTask;
import com.prepverse.backend.model.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlannerTaskRepository extends JpaRepository<PlannerTask, Long> {
    List<PlannerTask> findByUser(User user);
}

package com.prepverse.backend.repository;

import com.prepverse.backend.model.MockTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MockTestRepository extends JpaRepository<MockTest, Long> {
}

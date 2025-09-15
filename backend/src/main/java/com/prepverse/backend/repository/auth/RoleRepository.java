package com.prepverse.backend.repository.auth;

import com.prepverse.backend.model.auth.ERole;
import com.prepverse.backend.model.auth.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(ERole name);
}
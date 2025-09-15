package com.prepverse.backend.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.prepverse.backend.model.Question;
import com.prepverse.backend.model.auth.ERole;
import com.prepverse.backend.model.auth.Role;
import com.prepverse.backend.repository.QuestionRepository;
import com.prepverse.backend.repository.auth.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    private final QuestionRepository questionRepository;
    private final ObjectMapper objectMapper;
    private final RoleRepository roleRepository;

    public DataLoader(QuestionRepository questionRepository, ObjectMapper objectMapper, RoleRepository roleRepository) {
        this.questionRepository = questionRepository;
        this.objectMapper = objectMapper;
        this.roleRepository = roleRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Load roles if not present
        if (roleRepository.count() == 0) {
            for (ERole roleName : ERole.values()) {
                roleRepository.save(new Role(roleName));
            }
        }

        if (questionRepository.count() == 0) {
            InputStream inputStream = TypeReference.class.getResourceAsStream("/mock-data.json");
            List<Question> questions = objectMapper.readValue(inputStream, new TypeReference<List<Question>>() {});
            questionRepository.saveAll(questions);
        }
    }
}

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    grade VARCHAR(255),
    exam_goal VARCHAR(255),
    timeline VARCHAR(255)
);

-- Roles Table
CREATE TABLE IF NOT EXISTS roles (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

-- User Roles (Many-to-Many)
CREATE TABLE IF NOT EXISTS user_roles (
    user_id BIGINT NOT NULL,
    role_id BIGINT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    exam VARCHAR(255)
);

-- User Enrolled Courses (Many-to-Many)
CREATE TABLE IF NOT EXISTS user_enrolled_courses (
    user_id BIGINT,
    course_id BIGINT,
    PRIMARY KEY (user_id, course_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Questions Table
CREATE TABLE IF NOT EXISTS questions (
    id BIGSERIAL PRIMARY KEY,
    question_id VARCHAR(255),
    title TEXT,
    description TEXT,
    exam VARCHAR(255),
    subject VARCHAR(255),
    chapter VARCHAR(255),
    topic VARCHAR(255),
    difficulty VARCHAR(255),
    type VARCHAR(255)
);

-- Question Options
CREATE TABLE IF NOT EXISTS question_options (
    question_id BIGINT,
    option_key VARCHAR(255),
    option_value VARCHAR(255),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- Question Correct Options
CREATE TABLE IF NOT EXISTS question_correct_options (
    question_id BIGINT,
    correct_option VARCHAR(255),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- Contests Table
CREATE TABLE IF NOT EXISTS contests (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    start_time TIMESTAMP,
    end_time TIMESTAMP
);

-- Contest Questions (Many-to-Many)
CREATE TABLE contest_questions (
    contest_id BIGINT,
    question_id BIGINT,
    PRIMARY KEY (contest_id, question_id),
    FOREIGN KEY (contest_id) REFERENCES contests(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- Mock Tests Table
CREATE TABLE mock_tests (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    duration_in_minutes INT
);

-- Mock Test Questions (Many-to-Many)
CREATE TABLE mock_test_questions (
    mock_test_id BIGINT,
    question_id BIGINT,
    PRIMARY KEY (mock_test_id, question_id),
    FOREIGN KEY (mock_test_id) REFERENCES mock_tests(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- Notes Table
CREATE TABLE notes (
    id BIGSERIAL PRIMARY KEY,
    content TEXT,
    user_id BIGINT,
    question_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- Planner Tasks Table
CREATE TABLE planner_tasks (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- User Contest Results Table
CREATE TABLE user_contest_results (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT,
    contest_id BIGINT,
    score INT,
    submission_time TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (contest_id) REFERENCES contests(id)
);

-- User Mock Test Results Table
CREATE TABLE user_mock_test_results (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT,
    mock_test_id BIGINT,
    score INT,
    time_taken_in_minutes INT,
    submission_time TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (mock_test_id) REFERENCES mock_tests(id)
);

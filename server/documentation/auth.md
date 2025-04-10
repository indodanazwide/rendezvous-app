# 🔐 Authentication System Design - Rendezvous Web App

This document outlines the structure and considerations for the **authentication system** of the Rendezvous Restaurant web application.

---

## 🧱 Database Schema: `users` Table

The `users` table is responsible for storing all user-related information required for authentication and access control.

### Schema Structure

```sql
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(15),
    password TEXT NOT NULL,
    role ENUM('customer', 'admin', 'staff') NOT NULL DEFAULT 'customer',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    provider ENUM('local', 'google') NOT NULL DEFAULT 'local',
    avatar_url TEXT,
    last_login TIMESTAMP NULL DEFAULT NULL,
    reset_token TEXT,
    reset_token_expiry TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_email (email),
    INDEX idx_username (username),
    INDEX idx_role (role),
    INDEX idx_provider (provider),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

---

## 💡 Design Considerations

### 🔑 Authentication

- Authentication handled using **Passport.js** (local strategy for username/password and optional OAuth strategies like Google).
- Passwords are **hashed** using `bcrypt` before storage.
- Sessions are managed using `express-session`.

### 🔐 Security Practices

- All user input is sanitized and validated.
- Sessions use secure cookies in production (`secure: true`).
- Password reset tokens are time-limited and stored securely.
- HTTPS enforced in production environments.

### 🧠 Roles & Permissions

- Role-based access control (RBAC) using the `role` field.
  - `customer`: Can view menu, make reservations, leave reviews.
  - `staff`: Can manage orders and reservations.
  - `admin`: Full control over the application.

---

## 📆 Future Additions (Optional)

- Email verification token flow.
- 2FA (Two Factor Authentication).
- OAuth integration for Microsoft login.
- User activity logs for audit purposes.

---

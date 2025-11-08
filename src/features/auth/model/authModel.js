// ===========================
// Simulated User "Database"
// (Stored in browser localStorage for persistence)
// ===========================

function getUsers() {
  return JSON.parse(localStorage.getItem("skillsync_users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("skillsync_users", JSON.stringify(users));
}

// ---------------------------
// LOGIN API
// ---------------------------
export async function loginApi({ email, password }) {
  if (!email || !password) {
    return { success: false, message: "Email and password are required" };
  }

  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { success: false, message: "Invalid credentials ❌" };
  }

  return {
    success: true,
    token: "dummy-token",
    user: {
      email: user.email,
      name: user.fullName,
    },
    message: `Welcome back ${user.fullName}! ✅`,
  };
}

// ---------------------------
// REGISTER API
// ---------------------------
export async function registerApi({ fullName, email, password }) {
  if (!fullName || !email || !password) {
    return { success: false, message: "All fields are required" };
  }

  if (!email.includes("@")) {
    return { success: false, message: "Invalid email format" };
  }

  if (password.length < 6) {
    return { success: false, message: "Password must be at least 6 characters" };
  }

  const users = getUsers();

  // Check if user already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return { success: false, message: "User already exists ❗" };
  }

  // Register new user
  const newUser = { fullName, email, password };
  users.push(newUser);
  saveUsers(users);

  return { success: true, userId: users.length, message: "Registration successful 🎉" };
}

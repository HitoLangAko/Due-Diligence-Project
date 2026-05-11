document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm");
  const registerForm = document.querySelector("#registerForm");

  const showRegisterBtn = document.querySelector("#showRegisterBtn");
  const showLoginBtn = document.querySelector("#showLoginBtn");

  const loginMessage = document.querySelector("#loginMessage");
  const registerMessage = document.querySelector("#registerMessage");

  if (!loginForm || !registerForm || !showRegisterBtn || !showLoginBtn) {
    console.error("Login/Register elements are missing. Check login.html IDs.");
    return;
  }

  function showMessage(element, message, type = "error") {
    element.textContent = message;
    element.classList.remove("hidden", "success", "error");
    element.classList.add(type);
  }

  function clearMessages() {
    loginMessage.classList.add("hidden");
    registerMessage.classList.add("hidden");
    loginMessage.textContent = "";
    registerMessage.textContent = "";
  }

  showRegisterBtn.addEventListener("click", () => {
    clearMessages();
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  });

  showLoginBtn.addEventListener("click", () => {
    clearMessages();
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    clearMessages();

    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        showMessage(loginMessage, result.message || "Login failed.", "error");
        return;
      }

      showMessage(loginMessage, "Login successful. Redirecting...", "success");

      setTimeout(() => {
        window.location.href = "/index.html";
      }, 500);
    } catch (error) {
      showMessage(loginMessage, "Unable to connect to the server.", "error");
    }
  });

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    clearMessages();

    const full_name = document.querySelector("#registerFullName").value;
    const email = document.querySelector("#registerEmail").value;
    const password = document.querySelector("#registerPassword").value;
    const role = document.querySelector("#registerRole").value;

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          full_name,
          email,
          password,
          role
        })
      });

      const result = await response.json();

      if (!response.ok) {
        showMessage(registerMessage, result.message || "Registration failed.", "error");
        return;
      }

      showMessage(registerMessage, result.message || "Account created successfully.", "success");

      setTimeout(() => {
        registerForm.reset();
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
        showMessage(loginMessage, "Account created. Please log in.", "success");
      }, 900);
    } catch (error) {
      showMessage(registerMessage, "Unable to connect to the server.", "error");
    }
  });
});document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm");
  const registerForm = document.querySelector("#registerForm");

  const showRegisterBtn = document.querySelector("#showRegisterBtn");
  const showLoginBtn = document.querySelector("#showLoginBtn");

  const loginMessage = document.querySelector("#loginMessage");
  const registerMessage = document.querySelector("#registerMessage");

  if (!loginForm || !registerForm || !showRegisterBtn || !showLoginBtn) {
    console.error("Login/Register elements are missing. Check login.html IDs.");
    return;
  }

  function showMessage(element, message, type = "error") {
    element.textContent = message;
    element.classList.remove("hidden", "success", "error");
    element.classList.add(type);
  }

  function clearMessages() {
    loginMessage.classList.add("hidden");
    registerMessage.classList.add("hidden");
    loginMessage.textContent = "";
    registerMessage.textContent = "";
  }

  showRegisterBtn.addEventListener("click", () => {
    clearMessages();
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  });

  showLoginBtn.addEventListener("click", () => {
    clearMessages();
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    clearMessages();

    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        showMessage(loginMessage, result.message || "Login failed.", "error");
        return;
      }

      showMessage(loginMessage, "Login successful. Redirecting...", "success");

      setTimeout(() => {
        window.location.href = "/index.html";
      }, 500);
    } catch (error) {
      showMessage(loginMessage, "Unable to connect to the server.", "error");
    }
  });

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    clearMessages();

    const full_name = document.querySelector("#registerFullName").value;
    const email = document.querySelector("#registerEmail").value;
    const password = document.querySelector("#registerPassword").value;
    const role = document.querySelector("#registerRole").value;

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          full_name,
          email,
          password,
          role
        })
      });

      const result = await response.json();

      if (!response.ok) {
        showMessage(registerMessage, result.message || "Registration failed.", "error");
        return;
      }

      showMessage(registerMessage, result.message || "Account created successfully.", "success");

      setTimeout(() => {
        registerForm.reset();
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
        showMessage(loginMessage, "Account created. Please log in.", "success");
      }, 900);
    } catch (error) {
      showMessage(registerMessage, "Unable to connect to the server.", "error");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const codeArea = document.querySelector(".code-area");
  const inputArea = document.querySelector(".input-area");
  const outputArea = document.querySelector(".output-area");
  const runButton = document.querySelector(".controls button");
  const languageSelect = document.querySelector(".controls select");
  const lineNumbers = document.querySelector(".line-numbers");
  const themeToggle = document.querySelector(".theme-toggle");

  // Function to generate line numbers
  const updateLineNumbers = () => {
    const lines = codeArea.value.split("\n");
    const lineCount = lines.length;

    // Generate line numbers HTML
    let lineNumbersHTML = "";
    for (let i = 1; i <= lineCount; i++) {
      lineNumbersHTML += `${i}\n`;
    }

    // Update line numbers
    lineNumbers.textContent = lineNumbersHTML;
  };

  // Initial line numbers
  updateLineNumbers();

  // Update line numbers on input
  codeArea.addEventListener("input", updateLineNumbers);

  // Handle tab key
  codeArea.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();

      const start = this.selectionStart;
      const end = this.selectionEnd;

      // Insert tab at cursor position
      this.value =
        this.value.substring(0, start) + "    " + this.value.substring(end);

      // Move cursor after the inserted tab
      this.selectionStart = this.selectionEnd = start + 4;

      // Update line numbers
      updateLineNumbers();
    }

    // Run code with Ctrl + Enter
    if (e.ctrlKey && e.key === "Enter") {
      executeCode();
    }
  });

  // Event listener for the Run button
  runButton.addEventListener("click", executeCode);

  // Function to execute JavaScript code
  async function executeCode() {
    try {
      // Add loading state
      runButton.classList.add("loading");
      runButton.disabled = true;

      const code = codeArea.value;
      const input = inputArea.value;
      const language = languageSelect.value;
      outputArea.value = ""; // Clear previous output

      // Basic error handling
      if (!language) {
        outputArea.value = "Please select a language.";
        return;
      }
      if (!code) {
        outputArea.value = "Error: No code to execute.";
        return;
      }

      let result;
      switch (language) {
        case "javascript":
          result = executeJavaScript(code, input);
          break;
        case "python":
          result =
            "Python execution is not supported in the browser. Use a server-side solution.";
          break;
        case "java":
          result =
            "Java execution is not supported in the browser. Use a server-side solution.";
          break;
        case "cpp":
          result =
            "C++ execution is not supported in the browser. Use a server-side solution.";
          break;
        case "csharp":
          result =
            "C# execution is not supported in the browser. Use a server-side solution.";
          break;
        default:
          outputArea.value = "Error: Select a language.";
          return;
      }

      outputArea.value = result;
      showMessage("Code executed successfully!");
    } catch (error) {
      outputArea.value = `Error: ${error.message}`;
      showMessage(error.message, "error");
    } finally {
      // Remove loading state
      runButton.classList.remove("loading");
      runButton.disabled = false;
    }
  }

  // Function to execute JavaScript code
  function executeJavaScript(code, input) {
    try {
      // Override console.log to capture output
      let consoleOutput = "";
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        consoleOutput += args.map((arg) => String(arg)).join(" ") + "\n";
        originalConsoleLog(...args); // Still log to the console
      };
      // Create a function to simulate input
      let inputIndex = 0;
      const getInput = () => {
        const inputs = input.split("\n");
        if (inputIndex < inputs.length) {
          return inputs[inputIndex++];
        } else {
          return ""; // Or handle end of input as needed
        }
      };
      // Prepare the environment for the code
      const context = {
        console: { log: console.log },
        getInput: getInput,
      };
      // Create a function from the user's code
      const execute = new Function("console", "getInput", code);
      // Execute the code
      execute(context.console, context.getInput);
      // Restore original console.log
      console.log = originalConsoleLog;
      // Return the captured console output
      return consoleOutput;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Handle clear button
  document
    .getElementById("clear-button")
    .addEventListener("click", function () {
      codeArea.value = "";
      outputArea.value = "";
      updateLineNumbers();
      showMessage("Editor cleared");
    });

  // Handle copy output
  document.getElementById("copy-output").addEventListener("click", function () {
    outputArea.select();
    document.execCommand("copy");
    showMessage("Output copied to clipboard!");
  });

  // Function to show message
  function showMessage(message, type = "success") {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${type}`;
    messageElement.innerHTML = `
      <i class="fas fa-${
        type === "success" ? "check-circle" : "exclamation-circle"
      }"></i>
      ${message}
    `;

    const outputSection = document.querySelector(".input-output");
    outputSection.insertBefore(messageElement, outputArea);

    // Remove message after 3 seconds
    setTimeout(() => messageElement.remove(), 3000);
  }

  // Function to handle theme toggle
  function toggleTheme() {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    themeToggle.innerHTML = `<i class="fas fa-${
      isLight ? "moon" : "sun"
    }"></i>`;
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }

  // Function to handle language change
  function handleLanguageChange() {
    const language = languageSelect.value;
    const placeholders = {
      javascript: `// Write your JavaScript code here
function hello() {
    console.log('Hello, World!');
}`,
      python: `# Write your Python code here
def hello():
    print("Hello, World!")`,
      java: `// Write your Java code here
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      cpp: `// Write your C++ code here
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
      csharp: `// Write your C# code here
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
    };

    codeArea.placeholder = placeholders[language] || placeholders.javascript;
    showMessage(
      `Language changed to ${
        language.charAt(0).toUpperCase() + language.slice(1)
      }`
    );
  }

  // Event listeners for language change
  languageSelect.addEventListener("change", handleLanguageChange);

  // Event listener for theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Initialize
  updateLineNumbers();

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    toggleTheme();
  }

  // Add keyboard shortcuts help
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "/") {
      showMessage(
        "Keyboard Shortcuts:<br>Ctrl + Enter: Run Code<br>Ctrl + /: Show Help<br>Tab: Indent Code"
      );
    }
  });

  console.log(document.getElementById("code-area")); // or whatever ID is causing the error
});
// ========== AI Integration ==========

// Call OpenAI API (modular function)
async function callOpenAI({ systemPrompt, userPrompt }) {
  const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your key or use a backend proxy!
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4", // or 'gpt-3.5-turbo'
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 512,
    }),
  });
  const data = await response.json();
  if (data.choices && data.choices[0] && data.choices[0].message) {
    return data.choices[0].message.content.trim();
  } else {
    throw new Error(data.error?.message || "AI API Error");
  }
}

// Generate code from a prompt
async function aiGenerateCode() {
  const prompt = window.prompt("Describe what you want to generate:");
  if (!prompt) return;
  outputArea.value = "Generating code...";
  try {
    const code = await callOpenAI({
      systemPrompt: "You are a helpful coding assistant.",
      userPrompt: `Write code for: ${prompt}`,
    });
    codeArea.value = code;
    updateLineNumbers();
    outputArea.value = "Code generated!";
  } catch (err) {
    outputArea.value = "Error: " + err.message;
  }
}

// Explain code
async function aiExplainCode() {
  outputArea.value = "Explaining code...";
  try {
    const explanation = await callOpenAI({
      systemPrompt: "You are a helpful coding assistant.",
      userPrompt: `Explain what this code does:\n${codeArea.value}`,
    });
    outputArea.value = explanation;
  } catch (err) {
    outputArea.value = "Error: " + err.message;
  }
}

// Debug code
async function aiDebugCode() {
  outputArea.value = "Debugging code...";
  try {
    const debug = await callOpenAI({
      systemPrompt: "You are a helpful coding assistant.",
      userPrompt: `Find bugs and suggest fixes for this code:\n${codeArea.value}`,
    });
    outputArea.value = debug;
  } catch (err) {
    outputArea.value = "Error: " + err.message;
  }
}

// Simulate output
async function aiSimulateOutput() {
  outputArea.value = "Simulating output...";
  try {
    const simulation = await callOpenAI({
      systemPrompt: "You are a helpful coding assistant.",
      userPrompt: `What would be the output of this code?\n${codeArea.value}`,
    });
    outputArea.value = simulation;
  } catch (err) {
    outputArea.value = "Error: " + err.message;
  }
}

// ========== Attach Event Listeners ==========

document.getElementById("ai-generate").onclick = aiGenerateCode;
document.getElementById("ai-explain").onclick = aiExplainCode;
document.getElementById("ai-debug").onclick = aiDebugCode;
document.getElementById("ai-simulate").onclick = aiSimulateOutput;

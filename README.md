# 💸 Bill Counter App

A sleek, responsive, and logic-heavy Tip Calculator built with **React** and **Tailwind CSS**. This project was designed to master **State Lifting**, **Controlled Components**, and **Component Architecture**.



## 🚀 Live Demo
**Check it out here:** https://dinesh-bill-counter-app.netlify.app/

---

## 🧠 Features
This isn't just a basic math app. It handles real-world edge cases:

* **Real-time Calculations:** No "Calculate" button needed. The UI reacts instantly to every keystroke (React State Power ⚡).
* **Smart Regex Formatting:** Inputs are cleaned on the fly to prevent math errors from symbols or letters.
* **Currency Support:** Formatted for **INR (₹)** with precision up to 2 decimal places.
* **Flexible Splitting:** Choose between fixed presets or enter a custom number of people.
* **Responsive Design:** Optimized for everything from a 4K monitor down to a **320px** mobile screen.

## 🛠️ Tech Stack
* **React (Vite)** - Component-based architecture.
* **Tailwind CSS** - For rapid, utility-first responsive styling.
* **Lucide React** (Optional if you added icons) - For the UI polish.

## 🏗️ Architecture Note
This project follows the **"Lifting State Up"** pattern. All core logic resides in `App.jsx`, ensuring a single source of truth, while UI elements are broken down into reusable components:
* `CalculatedDisplay` - Handles the math and decimal precision.
* `TipContainer` - Manages tip percentages and custom inputs.
* `SplitBillContainer` - Manages the "Per Person" logic.

---

## 👨‍💻 Developed By

**DINESH**<br>
*Frontend Developer*

---

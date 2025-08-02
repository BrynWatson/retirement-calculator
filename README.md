# Retirement Calculator

Simple retirment calculator for assignment

---

## Tech Stack

- **React** (with Vite)
- **Material UI (MUI)** – for layout and components
- **React Hook Form** – for managing form state
- **Yup** – for form validation
- **ApexCharts** – for visualizing savings growth

## File Managment
I use a Domain-Driven (feature-based) folder structure, which scales well for larger apps. Each feature has its own folder containing all its relted components, logic, and hooks. Shared or generic elements live in components/, hooks/, or utils/ closer to the root.

## Assumptions

- Contributions are made monthly
- Interest is compounded annually
- Returns are entered as a percentage

## Things I wanted to implement
- Unit Testing
- ESLint/Prettier configuration
- API and Service layer (if there was an API invloved)


## Final Notes

The assignment says that returns should be compounded annually, which is what I’ve done. In the real world, contributions are made monthly and returns can compound monthly or continuously. This means that my code slightly underestimates the growth compared to a more realistic monthly compounding scenario. However, I’ve  followed the assignments instruction to use annual compounding.

---

## How to Run

**Clone the repository**:

   ```bash
   1. git clone https://github.com/BrynWatson/retirement-calculator.git

   2. cd retirement-calculator

   3. npm install

   4. npm run dev

   5. Then open http://localhost:5173 in your browser.







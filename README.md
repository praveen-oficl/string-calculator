# Incubyte TDD Assessment - String Calculator

This project is part of the Incubyte recruitment process. The goal is to implement a String Calculator using the principles of Test-Driven Development (TDD).

## Problem Statement

Create a function `add(string)` that returns the sum of numbers in a given string.  
Follow TDD strictly and commit step by step.

## Features Implemented

- Returns 0 for an empty string
- Returns the number itself for a single input
- Sums two or more comma-separated numbers
- Supports newline (`\n`) as a delimiter
- Allows custom delimiters using the `//;\n1;2` syntax
- Throws an exception for negative numbers
- Shows all negative numbers in the exception message

### Tech Stack

## Backend
- Python 3
- Flask (API)
- Pytest (Unit Testing)

## Frontend
- React (with TypeScript)
- Vite
- Jest (for unit testing)


### How to Run

## Backend (Python+Flask)
1. Checkout backend branch
2. Execute below comments

bash
```
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## Frontend (React+Vite)
1. Checkout frontend branch
2. Execute below comments

bash
```
cd frontend
npm i install
npm run dev
```

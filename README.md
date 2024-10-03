# HANGUL_MEMORY_MATCH

[Let's Play Hangul Memory Match Game](https://loafcheck.github.io/HANGUL_MEMORY_MATCH/)

HANGUL_MEMORY_MATCH is revamped version of [FLIP](https://github.com/loafcheck/FLIP), restructured into a modular React app to gain deeper understanding of React and Open APIs, incorporating the [Korean Dictionary OpenAPI](https://krdict.korean.go.kr/openApi/openApi) 

## Motivation

 I discovered that when education was interactive, children were able to retain information while having an enjoyable experience. Knowing that existing language online games were limited to preset vocabulary, I developed the [HANGUL_MEMORY_MATCH](https://github.com/loafcheck/HANGUL_MEMORY_MATCH.git), which allowed more words to be integrated and customized. 

## Features

### 1. **OpenAPI Integration**
   - **API Usage**: Integrated with the [Korean Dictionary OpenAPI](https://krdict.korean.go.kr/openApi/openApi) to enhance card content and provide additional functionality.

### 2. **Game State Management**
   - **State Handling**: Efficiently manages game state using React hooks.
   - **Asynchronous Updates**: Handles asynchronous state updates to ensure smooth and responsive gameplay.

### 3. **Card Flipping Mechanism**
   - **Interactive Gameplay**: Click on cards to flip them and reveal their contents.
   - **Matching Logic**: Automatically detects and highlights matching card pairs.
   - **Visual Feedback**: Provides visual cues and feedback when cards are matched or flipped.

### 4. **Responsive Design**
   - **Mobile-Friendly**: Optimized for a smooth experience on mobile devices.
   - **Adaptive Layout**: Adjusts the layout based on screen size and orientation.

## Game Overview

### 1. **Instruction**
*Get started with the game by following the instructions provided.*
   ![Instruction Image](public/images/Instruction.png)
   

---

### 2. **Dictionary**
*Search Korean vocabulary using the [Korean Dictionary OpenAPI](https://krdict.korean.go.kr/openApi/openApi).*
   ![Dictionary Image](public/images/Dictionary.png)
   

---

### 3. **Game**
*Play the flip game where you reveal cards and try to find matching pairs.*
   ![Game Image](public/images/Game.png)
   

---

### 4. **Win**
  *Once all cards are matched, a congratulatory message will pop up.*
   ![Win Image](public/images/Win.png)
   

---
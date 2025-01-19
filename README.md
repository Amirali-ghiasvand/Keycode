# Keycode Visualizer

This is a simple project to display details about keyboard events. When you press any key on your keyboard, the application shows:
- **KeyCode**: The numeric code of the key.
- **Key**: The name of the key.
- **Location**: The location of the key on the keyboard.
- **Which**: The numeric code of the key (similar to KeyCode).
- **Code**: The string representing the physical key.

## Files
- `index.html`: Contains the structure of the application.
- `keycode.css`: Handles the styling and layout.
- `keycode.js`: Provides the logic to capture and display key event details.

## How to Use
1. Open `index.html` in your browser.
2. Press any key on your keyboard.
3. The page updates to show the key's details in real-time.

## Code Overview
### JavaScript Logic
The `keydown` event is used to capture the key press details and update the page:
```javascript
let title = document.querySelector('.title');
let keyCodeElem = document.querySelector('.keycode');
let keyElem = document.querySelector('.key');
let locationElem = document.querySelector('.location');
let whichElem = document.querySelector('.which');
let codeElem = document.querySelector('.code');

document.body.addEventListener('keydown', function (event) {
    event.preventDefault();

    keyCodeElem.innerHTML = event.keyCode;
    keyElem.innerHTML = event.key;
    locationElem.innerHTML = event.location;
    whichElem.innerHTML = event.which;
    codeElem.innerHTML = event.code;
});
```

### CSS Styling
The design uses a modern layout with hover effects and responsive adjustments:
```css
body {
    background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
    color: #eaeaea;
}

.box {
    background: linear-gradient(145deg, #212121, #161616);
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.7);
}
```

## Example
1. Open the application.
2. Press a key like `A`.
3. The screen will display:
   - **Key**: A
   - **KeyCode**: 65
   - **Location**: 0
   - **Which**: 65
   - **Code**: KeyA

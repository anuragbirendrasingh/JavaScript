# Debouncing Notes
//ctrl+shift+v

## What is Debouncing?
- A technique to limit how often a function runs.
- Delays function execution until after a specified time has passed since the last event.

## Real Use Case:
- Search field: We only hit the GitHub Users API if the user pauses typing for 500ms.

## Key Concepts:
- `clearTimeout(timer)` cancels previous scheduled calls.
- `setTimeout(..., delay)` reschedules execution every time input changes.
- Prevents unnecessary network requests.

## API Used:
- GitHub Search Users: https://api.github.com/search/users?q=<username>

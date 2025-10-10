## Callbacks themselves are neither synchronous nor asynchronous —
their behavior depends on how the function that uses them is implemented.
Functions like map or forEach execute callbacks immediately (synchronous),
while APIs like setTimeout, fetch, or event handlers execute callbacks later, asynchronously via the event loop.

Callback Type	Executes When	Uses	Call Stack Behavior
Synchronous	Immediately, during function call	map, forEach, loops	Runs inside same stack
Asynchronous	Later (after event or delay)	setTimeout, fetch, events	Goes to Web APIs → Event Loop → StackCallback Type	Executes When	Uses	Call Stack Behavior
Synchronous	Immediately, during function call	map, forEach, loops	Runs inside same stack
Asynchronous	Later (after event or delay)	setTimeout, fetch, events	Goes to Web APIs → Event Loop → Stack
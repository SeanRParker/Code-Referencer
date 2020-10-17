# Code Referencer
## Quickly see how to do different tasks in other languages

**Examples of tasks**
- assign a variable
- display a value
- declare and call a function
- loop an array
- Assign key value pairs to an object
- higher order functions
- etc

Each task has its own page with a box holding the main content, with toggle-able tabs dedicated to different languages. The box has arrows to show the next “slide”.

**Possible tabs**
- Javascript
- ES6 (could be it's own tab or a link on the relevant tasks)
- Ruby
- Python
- Java
- PHP
- C
- R
- etc

Navigation is a dropdown (maybe even a different page) of all the different “tasks” divided out into sections (arrays, variables, functions, etc)

The goal is clear examples. No “foo”, “bar”, “bar” garbage. When possible the example should be the same across languages.

Since this is a static site, without anything complicated like forums or voting on answers, I’m using Svelte + Sapper.

I could either have content underneath the box explaining each task, or an “i” icon you click to toggle whether that content is visible. That seems the best way forward.

### Post MVP features
1. User can have preferred languages by default and those tabs appear first, with a dropdown at the end showing the remaining ones on smaller screens.

# Front End Refactoring Challenge Notes


Hi there Studio 71!

So for the refactoring challenge, upon looking over the code I noticed two main problems,
namely that there was no file structure to speak of, and that all of the state management was handled by passing local state
around, so I decided the two improvement I would make to the application would be to break up the monolithic files
into a reasonable file structure, and to replace most of the in-file state management with the Redux library.

Beyond that, the only notes I have were that the Times file seemed small enough that the inline state management
was acceptable, and that while I did the file restructuring for the CSS, I didn't do any abstracting, so what's actually
in the two files is just a copy of the original css file.

I feel like I could have done better with a plain from-scratch request, but I'm guessing part of the challenge was to see
how you dealt with existing code, so I changed as much as I felt comfortable with while knowing I wasn't changing
the original functionality too much.


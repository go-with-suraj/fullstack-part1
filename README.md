# React + Vite


Part0

4.
sequenceDiagram
    participant browser
    participant server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: { "content": "New note", "date": "2023-12-20" }
    deactivate server
    The new note is saved



5.
sequenceDiagram
    participant browser
    participant server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document for SPA
    deactivate server
    The browser loads the SPA and renders content dynamically


6.
sequenceDiagram
    participant browser
    participant server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa/notes
    activate server
    server-->>browser: { "content": "New note", "date": "2023-12-20" }
    deactivate server
    The note is dynamically updated on the page


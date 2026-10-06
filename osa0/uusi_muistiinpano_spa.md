sequenceDiagram
    participant browser
    participant server

    browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    browser -->> server: {content: "hei moi", date: "2026-10-06T15:43:41.826Z"}
    deactivate server

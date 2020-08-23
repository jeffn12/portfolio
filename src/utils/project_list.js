import {
  would_you_rather,
  flashcards,
  myreads,
  issue_tracker,
  message_board
} from "../images";

export const PROJECT_LIST = [
  {
    title: "Would You Rather?",
    description:
      "an adaptation of the popular polling game written with React (UI) and Redux (State Management)",
    techStack: "React, Redux, Express, MongoDB",
    codeURL: "https://github.com/jeffn12/reactnd-project-would-you-rather",
    liveURL: "https://jn-would-you-rather.herokuapp.com",
    icon: would_you_rather
  },
  {
    title: "Mobile Flashcards App",
    description:
      "a flashcards application for iOS, Android, and Web written with React Native (UI) and Redux",
    techStack: "React Native, Redux",
    codeURL: "https://github.com/jeffn12/mobile-flashcards",
    liveURL: "https://mobile-flashcards.surge.sh",
    icon: flashcards
  },
  {
    title: "MyReads Library",
    description:
      "a personal library organizer with a live search of Udacity’s library database written with React",
    techStack: "React",
    codeURL: "https://github.com/jeffn12/reactnd-project-my-reads",
    liveURL: "https://gentle-meadow-47878.herokuapp.com/",
    icon: myreads
  },
  {
    title: "Issue Tracker Backend",
    description:
      "an issue/ticket tracking system backend written with Express (server) and a MongoDB CRUD API.",
    techStack: "Express, MongoDB",
    codeURL: "https://glitch.com/edit/#!/jln-issuetracker",
    liveURL: "https://jln-issuetracker.glitch.me/portfolio/",
    icon: issue_tracker
  },
  {
    title: "Message Board Backend",
    description:
      "an anonymous message board backend written with Express (server) and a MongoDB CRUD API.",
    techStack: "Express, MongoDB",
    codeURL: "https://glitch.com/edit/#!/jln-messageboard",
    liveURL: "https://jln-messageboard.glitch.me/b/portfolio",
    icon: message_board
  }
];

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
      "Full stack adaptation of the popular polling game using Express, MongoDB, React and Redux. " +
      "The responsive front end communicates with my REST API using Axios, and performs updates optimistically.",
    techStack: "React, Redux, Express, MongoDB",
    codeURL: "https://github.com/jeffn12/reactnd-project-would-you-rather",
    liveURL: "https://jn-would-you-rather.herokuapp.com",
    icon: would_you_rather
  },
  {
    title: "Mobile Flashcards",
    description:
      "Flashcards application for iOS, Android, and Web written with React Native and Redux. " +
      "Create multiple decks, add your own cards, and quiz yourself on what you want to remember.",
    techStack: "React Native, Redux",
    codeURL: "https://github.com/jeffn12/mobile-flashcards",
    liveURL: "https://mobile-flashcards.surge.sh",
    icon: flashcards
  },
  {
    title: "MyReads Library",
    description:
      "Personal library organizer written with React.  Search Udacity’s library database as you type " +
      "to find and add books to your library. Move them from shelf to shelf as you progress through your reading list.",
    techStack: "React",
    codeURL: "https://github.com/jeffn12/reactnd-project-my-reads",
    liveURL: "https://gentle-meadow-47878.herokuapp.com/",
    icon: myreads
  },
  {
    title: "Issue Tracker",
    description:
      "Help desk issue/ticket tracking system Express server and API to a MongoDB database.  React front end coming soon!",
    techStack: "Express, MongoDB",
    codeURL: "https://glitch.com/edit/#!/jln-issuetracker",
    liveURL: "https://jln-issuetracker.glitch.me/portfolio/",
    icon: issue_tracker
  },
  {
    title: "Message Board",
    description:
      "Express server and API to a MongoDB database for an Anonymous Message Board.  React front end coming soon!",
    techStack: "Express, MongoDB",
    codeURL: "https://glitch.com/edit/#!/jln-messageboard",
    liveURL: "https://jln-messageboard.glitch.me/b/portfolio",
    icon: message_board
  }
];

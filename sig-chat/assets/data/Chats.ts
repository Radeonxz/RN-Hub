export default {
  id: "1",
  users: [
    {
      id: "u1",
      name: "Foo",
      imageUri: "https://randomuser.me/api/portraits/lego/1.jpg"
    },
    {
      id: "u2",
      name: "Bar",
      imageUri: "https://randomuser.me/api/portraits/lego/2.jpg"
    }
  ],
  messages: [
    {
      id: "m1",
      content: "How are you, Bar!",
      createdAt: "2020-10-10T12:48:00.000Z",
      user: {
        id: "u1",
        name: "Foo"
      }
    },
    {
      id: "m2",
      content: "I am good, good",
      createdAt: "2020-10-03T14:49:00.000Z",
      user: {
        id: "u2",
        name: "Bar"
      }
    },
    {
      id: "m3",
      content: "What about you?",
      createdAt: "2020-10-03T14:49:40.000Z",
      user: {
        id: "u2",
        name: "Bar"
      }
    },
    {
      id: "m4",
      content: "Good as well, preparing for the stream now.",
      createdAt: "2020-10-03T14:50:00.000Z",
      user: {
        id: "u1",
        name: "Foo"
      }
    },
    {
      id: "m5",
      content: "How is Baz doing?",
      createdAt: "2020-10-03T14:51:00.000Z",
      user: {
        id: "u1",
        name: "Foo"
      }
    },
    {
      id: "m6",
      content: "going to the Moooooon",
      createdAt: "2020-10-03T14:49:00.000Z",
      user: {
        id: "u2",
        name: "Bar"
      }
    },
    {
      id: "m7",
      content: "btw, Baz is interested in Baz!",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u2",
        name: "Bar"
      }
    }
  ]
};

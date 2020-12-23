const allUsers = [
  {
    id: 100,
    name: "Qasim Salam",
  },
  {
    id: 101,
    name: "Neelam Anwar",
  },
  {
    id: 102,
    name: "Saad Javaid",
  },
  {
    id: 103,
    name: "Talha Masood",
  },
  {
    id: 104,
    name: "Ali Bilal",
  },
  {
    id: 105,
    name: "Zain",
  },
  {
    id: 106,
    name: "Talal Ali",
  },
  {
    id: 107,
    name: "Bilal Zain",
  },
  {
    id: 108,
    name: "Mueez Ali",
  },
];

const linked = [
  {
    id: 106,
    name: "Talal Ali",
  },
  {
    id: 108,
    name: "Mueez Ali",
  },
];

const linkedData = (allUsers, linked) => {
  let unLinked = allUsers;
  linked.forEach((item) => {
    unLinked = unLinked.filter((user) => user.id !== item.id);
  });
  console.log(unLinked);
};
linkedData(allUsers, linked);

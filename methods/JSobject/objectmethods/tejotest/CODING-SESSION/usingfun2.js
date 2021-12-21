// Your mission is to console.log 'creamed corn' from deep within the bizarre structure:

const garmonbozia = {
  meltedFace: true,
  wobblyArms: true,
  mysteryMeats: [
    "Schlimmbinooks",
    "blangs",
    { place: "Akrotiri", treasures: ["Minoan temples", "volcanoes"] },
    {
      type: "Yuck-tops",
      deliverables: [
        "Nevermind",
        { zone: "safety-zone" },
        { zone: false, true: true },
        () => {
          return () => {
            //1
            return () => {
              //2
              return () => {
                //3
                return () => {
                  //4
                  return {
                    //Object
                    website: "Gossipcop.com",
                    what: {
                      offering: "creamed corn",
                      location: "dark",
                    },
                  };
                };
              };
            };
          };
        },
      ],
    },
  ],
};
console.log(
  garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering
);
//The following code logs Captain America
//console.log(createCaptain().aliases.superheroName)

//The following code logs i can do this all day
//console.log(createCaptain().sayPhrase()

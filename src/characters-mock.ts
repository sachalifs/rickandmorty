const charactersMock = [
  {
    __typename: 'Character',
    id: '1',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive',
    location: {
      __typename: 'Location',
      id: '20',
      name: 'Earth (Replacement Dimension)'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '1',
        name: 'Pilot'
      },
      {
        __typename: 'Episode',
        id: '2',
        name: 'Lawnmower Dog'
      },
      {
        __typename: 'Episode',
        id: '3',
        name: 'Anatomy Park'
      },
      {
        __typename: 'Episode',
        id: '4',
        name: 'M. Night Shaym-Aliens!'
      },
      {
        __typename: 'Episode',
        id: '5',
        name: 'Meeseeks and Destroy'
      },
      {
        __typename: 'Episode',
        id: '6',
        name: 'Rick Potion #9'
      },
      {
        __typename: 'Episode',
        id: '7',
        name: 'Raising Gazorpazorp'
      },
      {
        __typename: 'Episode',
        id: '8',
        name: 'Rixty Minutes'
      },
      {
        __typename: 'Episode',
        id: '9',
        name: 'Something Ricked This Way Comes'
      },
      {
        __typename: 'Episode',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind'
      },
      {
        __typename: 'Episode',
        id: '11',
        name: 'Ricksy Business'
      },
      {
        __typename: 'Episode',
        id: '12',
        name: 'A Rickle in Time'
      },
      {
        __typename: 'Episode',
        id: '13',
        name: 'Mortynight Run'
      },
      {
        __typename: 'Episode',
        id: '14',
        name: 'Auto Erotic Assimilation'
      },
      {
        __typename: 'Episode',
        id: '15',
        name: 'Total Rickall'
      },
      {
        __typename: 'Episode',
        id: '16',
        name: 'Get Schwifty'
      },
      {
        __typename: 'Episode',
        id: '17',
        name: 'The Ricks Must Be Crazy'
      },
      {
        __typename: 'Episode',
        id: '18',
        name: 'Big Trouble in Little Sanchez'
      },
      {
        __typename: 'Episode',
        id: '19',
        name: 'Interdimensional Cable 2: Tempting Fate'
      },
      {
        __typename: 'Episode',
        id: '20',
        name: "Look Who's Purging Now"
      },
      {
        __typename: 'Episode',
        id: '21',
        name: 'The Wedding Squanchers'
      },
      {
        __typename: 'Episode',
        id: '22',
        name: 'The Rickshank Rickdemption'
      },
      {
        __typename: 'Episode',
        id: '23',
        name: 'Rickmancing the Stone'
      },
      {
        __typename: 'Episode',
        id: '24',
        name: 'Pickle Rick'
      },
      {
        __typename: 'Episode',
        id: '25',
        name: 'Vindicators 3: The Return of Worldender'
      },
      {
        __typename: 'Episode',
        id: '26',
        name: 'The Whirly Dirly Conspiracy'
      },
      {
        __typename: 'Episode',
        id: '27',
        name: 'Rest and Ricklaxation'
      },
      {
        __typename: 'Episode',
        id: '28',
        name: 'The Ricklantis Mixup'
      },
      {
        __typename: 'Episode',
        id: '29',
        name: "Morty's Mind Blowers"
      },
      {
        __typename: 'Episode',
        id: '30',
        name: "The ABC's of Beth"
      },
      {
        __typename: 'Episode',
        id: '31',
        name: 'The Rickchurian Mortydate'
      },
      {
        __typename: 'Episode',
        id: '32',
        name: 'Edge of Tomorty: Rick, Die, Rickpeat'
      },
      {
        __typename: 'Episode',
        id: '33',
        name: 'The Old Man and the Seat'
      },
      {
        __typename: 'Episode',
        id: '34',
        name: "One Crew Over the Crewcoo's Morty"
      },
      {
        __typename: 'Episode',
        id: '35',
        name: "Claw and Hoarder: Special Ricktim's Morty"
      },
      {
        __typename: 'Episode',
        id: '36',
        name: 'Rattlestar Ricklactica'
      },
      {
        __typename: 'Episode',
        id: '37',
        name: 'Never Ricking Morty'
      },
      {
        __typename: 'Episode',
        id: '38',
        name: 'Promortyus'
      },
      {
        __typename: 'Episode',
        id: '39',
        name: 'The Vat of Acid Episode'
      },
      {
        __typename: 'Episode',
        id: '40',
        name: 'Childrick of Mort'
      },
      {
        __typename: 'Episode',
        id: '41',
        name: 'Star Mort: Rickturn of the Jerri'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '2',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Morty Smith',
    species: 'Human',
    status: 'Alive',
    location: {
      __typename: 'Location',
      id: '20',
      name: 'Earth (Replacement Dimension)'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '1',
        name: 'Pilot'
      },
      {
        __typename: 'Episode',
        id: '2',
        name: 'Lawnmower Dog'
      },
      {
        __typename: 'Episode',
        id: '3',
        name: 'Anatomy Park'
      },
      {
        __typename: 'Episode',
        id: '4',
        name: 'M. Night Shaym-Aliens!'
      },
      {
        __typename: 'Episode',
        id: '5',
        name: 'Meeseeks and Destroy'
      },
      {
        __typename: 'Episode',
        id: '6',
        name: 'Rick Potion #9'
      },
      {
        __typename: 'Episode',
        id: '7',
        name: 'Raising Gazorpazorp'
      },
      {
        __typename: 'Episode',
        id: '8',
        name: 'Rixty Minutes'
      },
      {
        __typename: 'Episode',
        id: '9',
        name: 'Something Ricked This Way Comes'
      },
      {
        __typename: 'Episode',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind'
      },
      {
        __typename: 'Episode',
        id: '11',
        name: 'Ricksy Business'
      },
      {
        __typename: 'Episode',
        id: '12',
        name: 'A Rickle in Time'
      },
      {
        __typename: 'Episode',
        id: '13',
        name: 'Mortynight Run'
      },
      {
        __typename: 'Episode',
        id: '14',
        name: 'Auto Erotic Assimilation'
      },
      {
        __typename: 'Episode',
        id: '15',
        name: 'Total Rickall'
      },
      {
        __typename: 'Episode',
        id: '16',
        name: 'Get Schwifty'
      },
      {
        __typename: 'Episode',
        id: '17',
        name: 'The Ricks Must Be Crazy'
      },
      {
        __typename: 'Episode',
        id: '18',
        name: 'Big Trouble in Little Sanchez'
      },
      {
        __typename: 'Episode',
        id: '19',
        name: 'Interdimensional Cable 2: Tempting Fate'
      },
      {
        __typename: 'Episode',
        id: '20',
        name: "Look Who's Purging Now"
      },
      {
        __typename: 'Episode',
        id: '21',
        name: 'The Wedding Squanchers'
      },
      {
        __typename: 'Episode',
        id: '22',
        name: 'The Rickshank Rickdemption'
      },
      {
        __typename: 'Episode',
        id: '23',
        name: 'Rickmancing the Stone'
      },
      {
        __typename: 'Episode',
        id: '24',
        name: 'Pickle Rick'
      },
      {
        __typename: 'Episode',
        id: '25',
        name: 'Vindicators 3: The Return of Worldender'
      },
      {
        __typename: 'Episode',
        id: '26',
        name: 'The Whirly Dirly Conspiracy'
      },
      {
        __typename: 'Episode',
        id: '27',
        name: 'Rest and Ricklaxation'
      },
      {
        __typename: 'Episode',
        id: '28',
        name: 'The Ricklantis Mixup'
      },
      {
        __typename: 'Episode',
        id: '29',
        name: "Morty's Mind Blowers"
      },
      {
        __typename: 'Episode',
        id: '30',
        name: "The ABC's of Beth"
      },
      {
        __typename: 'Episode',
        id: '31',
        name: 'The Rickchurian Mortydate'
      },
      {
        __typename: 'Episode',
        id: '32',
        name: 'Edge of Tomorty: Rick, Die, Rickpeat'
      },
      {
        __typename: 'Episode',
        id: '33',
        name: 'The Old Man and the Seat'
      },
      {
        __typename: 'Episode',
        id: '34',
        name: "One Crew Over the Crewcoo's Morty"
      },
      {
        __typename: 'Episode',
        id: '35',
        name: "Claw and Hoarder: Special Ricktim's Morty"
      },
      {
        __typename: 'Episode',
        id: '36',
        name: 'Rattlestar Ricklactica'
      },
      {
        __typename: 'Episode',
        id: '37',
        name: 'Never Ricking Morty'
      },
      {
        __typename: 'Episode',
        id: '38',
        name: 'Promortyus'
      },
      {
        __typename: 'Episode',
        id: '39',
        name: 'The Vat of Acid Episode'
      },
      {
        __typename: 'Episode',
        id: '40',
        name: 'Childrick of Mort'
      },
      {
        __typename: 'Episode',
        id: '41',
        name: 'Star Mort: Rickturn of the Jerri'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '3',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    name: 'Summer Smith',
    species: 'Human',
    status: 'Alive',
    location: {
      __typename: 'Location',
      id: '20',
      name: 'Earth (Replacement Dimension)'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '6',
        name: 'Rick Potion #9'
      },
      {
        __typename: 'Episode',
        id: '7',
        name: 'Raising Gazorpazorp'
      },
      {
        __typename: 'Episode',
        id: '8',
        name: 'Rixty Minutes'
      },
      {
        __typename: 'Episode',
        id: '9',
        name: 'Something Ricked This Way Comes'
      },
      {
        __typename: 'Episode',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind'
      },
      {
        __typename: 'Episode',
        id: '11',
        name: 'Ricksy Business'
      },
      {
        __typename: 'Episode',
        id: '12',
        name: 'A Rickle in Time'
      },
      {
        __typename: 'Episode',
        id: '14',
        name: 'Auto Erotic Assimilation'
      },
      {
        __typename: 'Episode',
        id: '15',
        name: 'Total Rickall'
      },
      {
        __typename: 'Episode',
        id: '16',
        name: 'Get Schwifty'
      },
      {
        __typename: 'Episode',
        id: '17',
        name: 'The Ricks Must Be Crazy'
      },
      {
        __typename: 'Episode',
        id: '18',
        name: 'Big Trouble in Little Sanchez'
      },
      {
        __typename: 'Episode',
        id: '19',
        name: 'Interdimensional Cable 2: Tempting Fate'
      },
      {
        __typename: 'Episode',
        id: '20',
        name: "Look Who's Purging Now"
      },
      {
        __typename: 'Episode',
        id: '21',
        name: 'The Wedding Squanchers'
      },
      {
        __typename: 'Episode',
        id: '22',
        name: 'The Rickshank Rickdemption'
      },
      {
        __typename: 'Episode',
        id: '23',
        name: 'Rickmancing the Stone'
      },
      {
        __typename: 'Episode',
        id: '24',
        name: 'Pickle Rick'
      },
      {
        __typename: 'Episode',
        id: '25',
        name: 'Vindicators 3: The Return of Worldender'
      },
      {
        __typename: 'Episode',
        id: '26',
        name: 'The Whirly Dirly Conspiracy'
      },
      {
        __typename: 'Episode',
        id: '27',
        name: 'Rest and Ricklaxation'
      },
      {
        __typename: 'Episode',
        id: '29',
        name: "Morty's Mind Blowers"
      },
      {
        __typename: 'Episode',
        id: '30',
        name: "The ABC's of Beth"
      },
      {
        __typename: 'Episode',
        id: '31',
        name: 'The Rickchurian Mortydate'
      },
      {
        __typename: 'Episode',
        id: '32',
        name: 'Edge of Tomorty: Rick, Die, Rickpeat'
      },
      {
        __typename: 'Episode',
        id: '33',
        name: 'The Old Man and the Seat'
      },
      {
        __typename: 'Episode',
        id: '34',
        name: "One Crew Over the Crewcoo's Morty"
      },
      {
        __typename: 'Episode',
        id: '35',
        name: "Claw and Hoarder: Special Ricktim's Morty"
      },
      {
        __typename: 'Episode',
        id: '36',
        name: 'Rattlestar Ricklactica'
      },
      {
        __typename: 'Episode',
        id: '38',
        name: 'Promortyus'
      },
      {
        __typename: 'Episode',
        id: '39',
        name: 'The Vat of Acid Episode'
      },
      {
        __typename: 'Episode',
        id: '40',
        name: 'Childrick of Mort'
      },
      {
        __typename: 'Episode',
        id: '41',
        name: 'Star Mort: Rickturn of the Jerri'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '4',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    name: 'Beth Smith',
    species: 'Human',
    status: 'Alive',
    location: {
      __typename: 'Location',
      id: '20',
      name: 'Earth (Replacement Dimension)'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '6',
        name: 'Rick Potion #9'
      },
      {
        __typename: 'Episode',
        id: '7',
        name: 'Raising Gazorpazorp'
      },
      {
        __typename: 'Episode',
        id: '8',
        name: 'Rixty Minutes'
      },
      {
        __typename: 'Episode',
        id: '9',
        name: 'Something Ricked This Way Comes'
      },
      {
        __typename: 'Episode',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind'
      },
      {
        __typename: 'Episode',
        id: '11',
        name: 'Ricksy Business'
      },
      {
        __typename: 'Episode',
        id: '12',
        name: 'A Rickle in Time'
      },
      {
        __typename: 'Episode',
        id: '14',
        name: 'Auto Erotic Assimilation'
      },
      {
        __typename: 'Episode',
        id: '15',
        name: 'Total Rickall'
      },
      {
        __typename: 'Episode',
        id: '16',
        name: 'Get Schwifty'
      },
      {
        __typename: 'Episode',
        id: '18',
        name: 'Big Trouble in Little Sanchez'
      },
      {
        __typename: 'Episode',
        id: '19',
        name: 'Interdimensional Cable 2: Tempting Fate'
      },
      {
        __typename: 'Episode',
        id: '20',
        name: "Look Who's Purging Now"
      },
      {
        __typename: 'Episode',
        id: '21',
        name: 'The Wedding Squanchers'
      },
      {
        __typename: 'Episode',
        id: '22',
        name: 'The Rickshank Rickdemption'
      },
      {
        __typename: 'Episode',
        id: '23',
        name: 'Rickmancing the Stone'
      },
      {
        __typename: 'Episode',
        id: '24',
        name: 'Pickle Rick'
      },
      {
        __typename: 'Episode',
        id: '25',
        name: 'Vindicators 3: The Return of Worldender'
      },
      {
        __typename: 'Episode',
        id: '26',
        name: 'The Whirly Dirly Conspiracy'
      },
      {
        __typename: 'Episode',
        id: '27',
        name: 'Rest and Ricklaxation'
      },
      {
        __typename: 'Episode',
        id: '28',
        name: 'The Ricklantis Mixup'
      },
      {
        __typename: 'Episode',
        id: '29',
        name: "Morty's Mind Blowers"
      },
      {
        __typename: 'Episode',
        id: '30',
        name: "The ABC's of Beth"
      },
      {
        __typename: 'Episode',
        id: '31',
        name: 'The Rickchurian Mortydate'
      },
      {
        __typename: 'Episode',
        id: '32',
        name: 'Edge of Tomorty: Rick, Die, Rickpeat'
      },
      {
        __typename: 'Episode',
        id: '33',
        name: 'The Old Man and the Seat'
      },
      {
        __typename: 'Episode',
        id: '34',
        name: "One Crew Over the Crewcoo's Morty"
      },
      {
        __typename: 'Episode',
        id: '35',
        name: "Claw and Hoarder: Special Ricktim's Morty"
      },
      {
        __typename: 'Episode',
        id: '36',
        name: 'Rattlestar Ricklactica'
      },
      {
        __typename: 'Episode',
        id: '38',
        name: 'Promortyus'
      },
      {
        __typename: 'Episode',
        id: '39',
        name: 'The Vat of Acid Episode'
      },
      {
        __typename: 'Episode',
        id: '40',
        name: 'Childrick of Mort'
      },
      {
        __typename: 'Episode',
        id: '41',
        name: 'Star Mort: Rickturn of the Jerri'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '5',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    name: 'Jerry Smith',
    species: 'Human',
    status: 'Alive',
    location: {
      __typename: 'Location',
      id: '20',
      name: 'Earth (Replacement Dimension)'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '6',
        name: 'Rick Potion #9'
      },
      {
        __typename: 'Episode',
        id: '7',
        name: 'Raising Gazorpazorp'
      },
      {
        __typename: 'Episode',
        id: '8',
        name: 'Rixty Minutes'
      },
      {
        __typename: 'Episode',
        id: '9',
        name: 'Something Ricked This Way Comes'
      },
      {
        __typename: 'Episode',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind'
      },
      {
        __typename: 'Episode',
        id: '11',
        name: 'Ricksy Business'
      },
      {
        __typename: 'Episode',
        id: '12',
        name: 'A Rickle in Time'
      },
      {
        __typename: 'Episode',
        id: '13',
        name: 'Mortynight Run'
      },
      {
        __typename: 'Episode',
        id: '14',
        name: 'Auto Erotic Assimilation'
      },
      {
        __typename: 'Episode',
        id: '15',
        name: 'Total Rickall'
      },
      {
        __typename: 'Episode',
        id: '16',
        name: 'Get Schwifty'
      },
      {
        __typename: 'Episode',
        id: '18',
        name: 'Big Trouble in Little Sanchez'
      },
      {
        __typename: 'Episode',
        id: '19',
        name: 'Interdimensional Cable 2: Tempting Fate'
      },
      {
        __typename: 'Episode',
        id: '20',
        name: "Look Who's Purging Now"
      },
      {
        __typename: 'Episode',
        id: '21',
        name: 'The Wedding Squanchers'
      },
      {
        __typename: 'Episode',
        id: '22',
        name: 'The Rickshank Rickdemption'
      },
      {
        __typename: 'Episode',
        id: '23',
        name: 'Rickmancing the Stone'
      },
      {
        __typename: 'Episode',
        id: '26',
        name: 'The Whirly Dirly Conspiracy'
      },
      {
        __typename: 'Episode',
        id: '29',
        name: "Morty's Mind Blowers"
      },
      {
        __typename: 'Episode',
        id: '30',
        name: "The ABC's of Beth"
      },
      {
        __typename: 'Episode',
        id: '31',
        name: 'The Rickchurian Mortydate'
      },
      {
        __typename: 'Episode',
        id: '32',
        name: 'Edge of Tomorty: Rick, Die, Rickpeat'
      },
      {
        __typename: 'Episode',
        id: '33',
        name: 'The Old Man and the Seat'
      },
      {
        __typename: 'Episode',
        id: '35',
        name: "Claw and Hoarder: Special Ricktim's Morty"
      },
      {
        __typename: 'Episode',
        id: '36',
        name: 'Rattlestar Ricklactica'
      },
      {
        __typename: 'Episode',
        id: '38',
        name: 'Promortyus'
      },
      {
        __typename: 'Episode',
        id: '39',
        name: 'The Vat of Acid Episode'
      },
      {
        __typename: 'Episode',
        id: '40',
        name: 'Childrick of Mort'
      },
      {
        __typename: 'Episode',
        id: '41',
        name: 'Star Mort: Rickturn of the Jerri'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '6',
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    name: 'Abadango Cluster Princess',
    species: 'Alien',
    status: 'Alive',
    location: {
      __typename: 'Location',
      id: '2',
      name: 'Abadango'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '27',
        name: 'Rest and Ricklaxation'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '7',
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    name: 'Abradolf Lincler',
    species: 'Human',
    status: 'Unknown',
    location: {
      __typename: 'Location',
      id: '21',
      name: 'Testicle Monster Dimension'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind'
      },
      {
        __typename: 'Episode',
        id: '11',
        name: 'Ricksy Business'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '8',
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    name: 'Adjudicator Rick',
    species: 'Human',
    status: 'Dead',
    location: {
      __typename: 'Location',
      id: '3',
      name: 'Citadel of Ricks'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '28',
        name: 'The Ricklantis Mixup'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '9',
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
    name: 'Agency Director',
    species: 'Human',
    status: 'Dead',
    location: {
      __typename: 'Location',
      id: '20',
      name: 'Earth (Replacement Dimension)'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '24',
        name: 'Pickle Rick'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '10',
    image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
    name: 'Alan Rails',
    species: 'Human',
    status: 'Dead',
    location: {
      __typename: 'Location',
      id: '4',
      name: "Worldender's lair"
    },
    episode: [
      {
        __typename: 'Episode',
        id: '25',
        name: 'Vindicators 3: The Return of Worldender'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '11',
    image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
    name: 'Albert Einstein',
    species: 'Human',
    status: 'Dead',
    location: {
      __typename: 'Location',
      id: '20',
      name: 'Earth (Replacement Dimension)'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '12',
        name: 'A Rickle in Time'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '12',
    image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
    name: 'Alexander',
    species: 'Human',
    status: 'Dead',
    location: {
      __typename: 'Location',
      id: '5',
      name: 'Anatomy Park'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '3',
        name: 'Anatomy Park'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '13',
    image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    name: 'Alien Googah',
    species: 'Alien',
    status: 'Unknown',
    location: {
      __typename: 'Location',
      id: '20',
      name: 'Earth (Replacement Dimension)'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '31',
        name: 'The Rickchurian Mortydate'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '14',
    image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
    name: 'Alien Morty',
    species: 'Alien',
    status: 'Unknown',
    location: {
      __typename: 'Location',
      id: '3',
      name: 'Citadel of Ricks'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '15',
    image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    name: 'Alien Rick',
    species: 'Alien',
    status: 'Unknown',
    location: {
      __typename: 'Location',
      id: '3',
      name: 'Citadel of Ricks'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '16',
    image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
    name: 'Amish Cyborg',
    species: 'Alien',
    status: 'Dead',
    location: {
      __typename: 'Location',
      id: '20',
      name: 'Earth (Replacement Dimension)'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '15',
        name: 'Total Rickall'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '17',
    image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
    name: 'Annie',
    species: 'Human',
    status: 'Alive',
    location: {
      __typename: 'Location',
      id: '5',
      name: 'Anatomy Park'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '3',
        name: 'Anatomy Park'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '18',
    image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
    name: 'Antenna Morty',
    species: 'Human',
    status: 'Alive',
    location: {
      __typename: 'Location',
      id: '3',
      name: 'Citadel of Ricks'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind'
      },
      {
        __typename: 'Episode',
        id: '28',
        name: 'The Ricklantis Mixup'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '19',
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    name: 'Antenna Rick',
    species: 'Human',
    status: 'Unknown',
    location: {
      __typename: 'Location',
      id: null,
      name: 'unknown'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind'
      }
    ]
  },
  {
    __typename: 'Character',
    id: '20',
    image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    name: 'Ants in my Eyes Johnson',
    species: 'Human',
    status: 'Unknown',
    location: {
      __typename: 'Location',
      id: '6',
      name: 'Interdimensional Cable'
    },
    episode: [
      {
        __typename: 'Episode',
        id: '8',
        name: 'Rixty Minutes'
      }
    ]
  }
]

export type CharacterMockType = typeof charactersMock[number]
export default charactersMock

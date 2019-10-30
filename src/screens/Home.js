import React, { useEffect, Fragment } from 'react'
import { StatusBar } from 'react-native'
import NavigationBar from 'react-native-navbar-color'
import Title from '../components/Title'
import Searcher from '../components/Searcher'
import MoviesList from '../components/MoviesList'
import { AppContent } from '../shared/styles'

const Home = () => {
  useEffect(() => {
    NavigationBar.setColor('black')
  }, [])

  return (
    <Fragment>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <AppContent>
        <Title />
        <Searcher />
        <MoviesList title="Premieres" data={premiere} />
        <MoviesList title="Popular Now" data={popularNow} poster />
      </AppContent>
    </Fragment>
  )
}

export default Home

const premiere = [
  {
    popularity: 205.626,
    vote_count: 95,
    video: false,
    poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg',
    id: 290859,
    adult: false,
    backdrop_path: '/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg',
    original_language: 'en',
    original_title: 'Terminator: Dark Fate',
    genre_ids: [28, 878],
    title: 'Terminator: Dark Fate',
    vote_average: 6.8,
    overview:
      "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
    release_date: '2019-11-01'
  },
  {
    popularity: 108.199,
    vote_count: 156,
    video: false,
    poster_path: '/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg',
    id: 338967,
    adult: false,
    backdrop_path: '/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg',
    original_language: 'en',
    original_title: 'Zombieland: Double Tap',
    genre_ids: [28, 35, 27],
    title: 'Zombieland: Double Tap',
    vote_average: 7.5,
    overview:
      'The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.',
    release_date: '2019-10-18'
  },
  {
    popularity: 79.185,
    vote_count: 430,
    video: false,
    poster_path: '/d0FWbzrmm99BTfUqf1Lbjl2zu3S.jpg',
    id: 417384,
    adult: false,
    backdrop_path: '/qBI3Spq93lNxGzecdGpbwV5lOvU.jpg',
    original_language: 'en',
    original_title: 'Scary Stories to Tell in the Dark',
    genre_ids: [27, 53],
    title: 'Scary Stories to Tell in the Dark',
    vote_average: 6.3,
    overview:
      'Mill Valley, Pennsylvania, Halloween night, 1968. After playing a joke on a school bully, Sarah and her friends decide to sneak into a supposedly haunted house that once belonged to the powerful Bellows family, unleashing dark forces that they will be unable to control.',
    release_date: '2019-08-09'
  },
  {
    popularity: 77.814,
    vote_count: 55,
    video: false,
    poster_path: '/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg',
    id: 568012,
    adult: false,
    backdrop_path: '/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg',
    original_language: 'ja',
    original_title: 'ワンピーススタンピード',
    genre_ids: [28, 12, 16],
    title: 'One Piece: Stampede',
    vote_average: 7.6,
    overview:
      "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
    release_date: '2019-10-24'
  },
  {
    popularity: 92.86,
    vote_count: 1762,
    video: false,
    poster_path: '/zfE0R94v1E8cuKAerbskfD3VfUt.jpg',
    id: 474350,
    adult: false,
    backdrop_path: '/8moTOzunF7p40oR5XhlDvJckOSW.jpg',
    original_language: 'en',
    original_title: 'It Chapter Two',
    genre_ids: [27],
    title: 'It Chapter Two',
    vote_average: 6.9,
    overview:
      "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
    release_date: '2019-09-06'
  },
  {
    popularity: 64.725,
    vote_count: 81,
    video: false,
    poster_path: '/uaXNjRkDdjfxfVuKHo25wkA6CiA.jpg',
    id: 481084,
    adult: false,
    backdrop_path: '/xS89uFXPKKwyWJgM7ljAmuAtDMh.jpg',
    original_language: 'en',
    original_title: 'The Addams Family',
    genre_ids: [16, 35, 14, 10751],
    title: 'The Addams Family',
    vote_average: 6,
    overview:
      "The Addams family's lives begin to unravel when they face-off against a treacherous, greedy crafty reality-TV host while also preparing for their extended family to arrive for a major celebration.",
    release_date: '2019-10-11'
  },
  {
    popularity: 56.183,
    vote_count: 21,
    video: false,
    poster_path: '/fjmMu9fpqMMF17mCyLhNfkagKB0.jpg',
    id: 578189,
    adult: false,
    backdrop_path: '/zBAoNL50oFRCAJvEEQEKD8M48pV.jpg',
    original_language: 'en',
    original_title: 'Black and Blue',
    genre_ids: [28, 80, 18],
    title: 'Black and Blue',
    vote_average: 5.8,
    overview:
      "Exposure follows a rookie Detroit African-American female cop who stumbles upon corrupt officers who are murdering a drug dealer, an incident captured by her body cam. They pursue her through the night in an attempt to destroy the footage, but to make matters worse, they've tipped off a criminal gang that she's responsible for the dealer's death.",
    release_date: '2019-10-25'
  },
  {
    popularity: 61.024,
    vote_count: 942,
    video: false,
    poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    id: 496243,
    adult: false,
    backdrop_path: '/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
    original_language: 'ko',
    original_title: '기생충',
    genre_ids: [35, 18, 53],
    title: 'Parasite',
    vote_average: 8.5,
    overview:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    release_date: '2019-10-11'
  },
  {
    popularity: 43.526,
    vote_count: 346,
    video: false,
    poster_path: '/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg',
    id: 540901,
    adult: false,
    backdrop_path: '/jTab4cf4X1dJJVS4F8UOGuesvPd.jpg',
    original_language: 'en',
    original_title: 'Hustlers',
    genre_ids: [35, 80, 18],
    title: 'Hustlers',
    vote_average: 6.1,
    overview:
      'A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.',
    release_date: '2019-09-13'
  },
  {
    popularity: 47.397,
    vote_count: 8,
    video: false,
    poster_path: '/qCDPKUMX5xrxxQY8XhGVCKO3fks.jpg',
    id: 599975,
    adult: false,
    backdrop_path: '/hzL2P0tcU62A6JHPhprI8ZyBI73.jpg',
    original_language: 'en',
    original_title: 'Countdown',
    genre_ids: [27, 53],
    title: 'Countdown',
    vote_average: 6.8,
    overview:
      'A young nurse downloads an app that tells her she only has three days to live. With time ticking away and a mysterious figure haunting her, she must find a way to save her life before time runs out.',
    release_date: '2019-10-25'
  },
  {
    popularity: 47.105,
    vote_count: 2,
    video: false,
    poster_path: '/p69QzIBbN06aTYqRRiCOY1emNBh.jpg',
    id: 501170,
    adult: false,
    backdrop_path: '/4D4Ic9N4tnwaW4x241LGb1XOi7O.jpg',
    original_language: 'en',
    original_title: 'Doctor Sleep',
    genre_ids: [27],
    title: 'Doctor Sleep',
    vote_average: 5,
    overview:
      'A traumatized, alcoholic Dan Torrance meets Abra, a kid who also has the ability to "shine." He tries to protect her from the True Knot, a cult who\'s goal is to feed off people like them in order to remain immortal.',
    release_date: '2019-11-08'
  },
  {
    popularity: 37.517,
    vote_count: 225,
    video: false,
    poster_path: '/klkFYDZOetegK8floj6IjvbzzQ2.jpg',
    id: 513045,
    adult: false,
    backdrop_path: '/xgfn98c2UzvFWP6MXDzytearmQ3.jpg',
    original_language: 'en',
    original_title: 'Stuber',
    genre_ids: [28, 35, 80, 53],
    title: 'Stuber',
    vote_average: 6.4,
    overview:
      "After crashing his car, a cop who's recovering from eye surgery recruits an Uber driver to help him catch a heroin dealer. The mismatched pair soon find themselves in for a wild day of stakeouts and shootouts as they encounter the city's seedy side.",
    release_date: '2019-07-12'
  },
  {
    popularity: 41.186,
    vote_count: 9354,
    video: false,
    poster_path: '/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg',
    id: 694,
    adult: false,
    backdrop_path: '/h4DcDCOkQBENWBJZjNlPv3adQfM.jpg',
    original_language: 'en',
    original_title: 'The Shining',
    genre_ids: [27, 53],
    title: 'The Shining',
    vote_average: 8.2,
    overview:
      "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    release_date: '1980-05-23'
  },
  {
    popularity: 31.63,
    vote_count: 132,
    video: false,
    poster_path: '/llhj3xtNes2Ri4d9HqtleKo1CfL.jpg',
    id: 431580,
    adult: false,
    backdrop_path: '/tLCDKsXo6D84IVFanoElosSEKdp.jpg',
    original_language: 'en',
    original_title: 'Abominable',
    genre_ids: [12, 16, 35, 10751],
    title: 'Abominable',
    vote_average: 7,
    overview:
      'A group of misfits encounter a young Yeti named Everest, and they set off to reunite the magical creature with his family on the mountain of his namesake.',
    release_date: '2019-09-27'
  },
  {
    popularity: 45.868,
    vote_count: 41,
    video: false,
    poster_path: '/mi5VN4ww0JZgRFJIaPxxTGKjUg7.jpg',
    id: 522924,
    adult: false,
    backdrop_path: '/6esNUoXh4xQvucB7o7e3TCfjI65.jpg',
    original_language: 'en',
    original_title: 'The Art of Racing in the Rain',
    genre_ids: [35, 18, 10749],
    title: 'The Art of Racing in the Rain',
    vote_average: 8.1,
    overview:
      "Enzo, a family dog with a near-human soul and a philosopher's mind, evaluates his life through the lessons learned by his human owner, the race-car driver Denny Swift.",
    release_date: '2019-08-09'
  },
  {
    popularity: 34.714,
    vote_count: 38,
    video: false,
    poster_path: '/3nk9UoepYmv1G9oP18q6JJCeYwN.jpg',
    id: 503919,
    adult: false,
    backdrop_path: '/qlYhhBUseMUawwbvHCdPLXvBELv.jpg',
    original_language: 'en',
    original_title: 'The Lighthouse',
    genre_ids: [18, 14, 27, 9648],
    title: 'The Lighthouse',
    vote_average: 7.9,
    overview:
      'The hypnotic and hallucinatory tale of two lighthouse keepers on a remote and mysterious New England island in the 1890s.',
    release_date: '2019-10-18'
  },
  {
    popularity: 31.628,
    vote_count: 17,
    video: false,
    poster_path: '/eXH2w0Ylh706Rwj6CHFm1FKRBXG.jpg',
    id: 398978,
    adult: false,
    backdrop_path: '/aZ1ZqJ4uO1RK5gU5jRsO4qG7rJo.jpg',
    original_language: 'en',
    original_title: 'The Irishman',
    genre_ids: [80, 18],
    title: 'The Irishman',
    vote_average: 8.5,
    overview:
      'World War II veteran and mob hitman Frank "The Irishman" Sheeran recalls his possible involvement with the slaying of union leader Jimmy Hoffa.',
    release_date: '2019-11-01'
  },
  {
    popularity: 27.769,
    vote_count: 0,
    video: false,
    poster_path: '/zHQFqG0e5p9Fwhv5v6XIP9fLtYk.jpg',
    id: 330457,
    adult: false,
    backdrop_path: '/qxSi1e8ht92grVUoApGfz9oCvJv.jpg',
    original_language: 'en',
    original_title: 'Frozen II',
    genre_ids: [12, 16, 35, 14, 10402, 10751],
    title: 'Frozen II',
    vote_average: 0,
    overview:
      'Elsa, Anna, Kristoff and Olaf are going far in the forest to know the truth about an ancient mystery of their kingdom.',
    release_date: '2019-11-22'
  },
  {
    popularity: 27.536,
    vote_count: 420,
    video: false,
    poster_path: '/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg',
    id: 423204,
    adult: false,
    backdrop_path: '/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg',
    original_language: 'en',
    original_title: 'Angel Has Fallen',
    genre_ids: [28],
    title: 'Angel Has Fallen',
    vote_average: 5.7,
    overview:
      'After the events in the previous film, Secret Service agent Mike Banning finds himself framed for an assassination attempt on the President. Pursued by his own agency and the FBI, Banning races to clear his name and uncover the real terrorist threat which has set its sights on Air Force One.',
    release_date: '2019-08-23'
  },
  {
    popularity: 14.257,
    vote_count: 2,
    video: false,
    poster_path: '/aT5lsPynkYhDgFZH48jdNLobnZY.jpg',
    id: 617773,
    adult: false,
    backdrop_path: '/grdlgDe6p7QTkD5OQmHEd8pHaB5.jpg',
    original_language: 'en',
    original_title: 'Western Stars',
    genre_ids: [99, 10402],
    title: 'Western Stars',
    vote_average: 6.8,
    overview:
      'The incomparable Bruce Springsteen performs his critically acclaimed latest album and muses on life, rock, and the American dream, in this intimate and personal concert film co-directed by Thom Zimny and Springsteen himself.',
    release_date: '2019-10-25'
  }
]

const popularNow = [
  {
    popularity: 458.719,
    vote_count: 4305,
    video: false,
    poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    id: 475557,
    adult: false,
    backdrop_path: '/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
    original_language: 'en',
    original_title: 'Joker',
    genre_ids: [80, 18, 53],
    title: 'Joker',
    vote_average: 8.6,
    overview:
      'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
    release_date: '2019-10-04'
  },
  {
    popularity: 231.895,
    vote_count: 472,
    video: false,
    poster_path: '/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
    id: 420809,
    adult: false,
    backdrop_path: '/skvI4rYFrKXS73BJxWGH54Omlvv.jpg',
    original_language: 'en',
    original_title: 'Maleficent: Mistress of Evil',
    genre_ids: [12, 14, 10751],
    title: 'Maleficent: Mistress of Evil',
    vote_average: 7.2,
    overview:
      'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
    release_date: '2019-10-18'
  },
  {
    popularity: 205.626,
    vote_count: 95,
    video: false,
    poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg',
    id: 290859,
    adult: false,
    backdrop_path: '/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg',
    original_language: 'en',
    original_title: 'Terminator: Dark Fate',
    genre_ids: [28, 878],
    title: 'Terminator: Dark Fate',
    vote_average: 6.8,
    overview:
      "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
    release_date: '2019-11-01'
  },
  {
    popularity: 153.981,
    vote_count: 3242,
    video: false,
    poster_path: '/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg',
    id: 420818,
    adult: false,
    backdrop_path: '/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg',
    original_language: 'en',
    original_title: 'The Lion King',
    genre_ids: [12, 16, 18],
    title: 'The Lion King',
    vote_average: 7.1,
    overview:
      "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
    release_date: '2019-07-19'
  },
  {
    popularity: 152.512,
    vote_count: 19,
    video: false,
    poster_path: '/vn94LlNrbUWIZZyAdmvUepFBeaY.jpg',
    id: 449924,
    adult: false,
    backdrop_path: '/ekP6EVxL81lZ4ivcqPsoZ72rY0h.jpg',
    original_language: 'cn',
    original_title: '葉問4',
    genre_ids: [28, 18, 36],
    title: 'Ip Man 4: The Finale',
    vote_average: 5.4,
    overview:
      'Ip Man 4 is an upcoming Hong Kong biographical martial arts film directed by Wilson Yip and produced by Raymond Wong. It is the fourth in the Ip Man film series based on the life of the Wing Chun grandmaster of the same name and features Donnie Yen reprising the role. The film began production in April 2018 and ended in July the same year.',
    release_date: '2019-10-18'
  },
  {
    popularity: 150.818,
    vote_count: 1656,
    video: false,
    poster_path: '/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg',
    id: 384018,
    adult: false,
    backdrop_path: '/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg',
    original_language: 'en',
    original_title: 'Fast & Furious Presents: Hobbs & Shaw',
    genre_ids: [28, 12, 35],
    title: 'Fast & Furious Presents: Hobbs & Shaw',
    vote_average: 6.5,
    overview:
      "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson's Luke Hobbs and Statham's Deckard Shaw.)",
    release_date: '2019-08-02'
  },
  {
    popularity: 145.743,
    vote_count: 4700,
    video: false,
    poster_path: '/lcq8dVxeeOqHvvgcte707K0KVx5.jpg',
    id: 429617,
    adult: false,
    backdrop_path: '/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
    original_language: 'en',
    original_title: 'Spider-Man: Far from Home',
    genre_ids: [28, 12, 878],
    title: 'Spider-Man: Far from Home',
    vote_average: 7.6,
    overview:
      'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
    release_date: '2019-07-02'
  },
  {
    popularity: 177.111,
    vote_count: 8274,
    video: false,
    poster_path: '/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg',
    id: 920,
    adult: false,
    backdrop_path: '/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg',
    original_language: 'en',
    original_title: 'Cars',
    genre_ids: [12, 16, 35, 10751],
    title: 'Cars',
    vote_average: 6.7,
    overview:
      "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
    release_date: '2006-06-09'
  },
  {
    popularity: 87.5,
    vote_count: 205,
    video: false,
    poster_path: '/6Vr7GRINeaDLwfyXBpqO1VfmCrL.jpg',
    id: 454640,
    adult: false,
    backdrop_path: '/k7sE3loFwuU2mqf7FbZBeE3rjBa.jpg',
    original_language: 'en',
    original_title: 'The Angry Birds Movie 2',
    genre_ids: [28, 12, 16, 35, 10751],
    title: 'The Angry Birds Movie 2',
    vote_average: 6.5,
    overview:
      'Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine.',
    release_date: '2019-08-14'
  },
  {
    popularity: 88.14,
    vote_count: 2844,
    video: false,
    poster_path: '/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg',
    id: 301528,
    adult: false,
    backdrop_path: '/m67smI1IIMmYzCl9axvKNULVKLr.jpg',
    original_language: 'en',
    original_title: 'Toy Story 4',
    genre_ids: [12, 16, 35, 14, 10751],
    title: 'Toy Story 4',
    vote_average: 7.6,
    overview:
      'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.',
    release_date: '2019-06-21'
  },
  {
    popularity: 108.199,
    vote_count: 156,
    video: false,
    poster_path: '/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg',
    id: 338967,
    adult: false,
    backdrop_path: '/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg',
    original_language: 'en',
    original_title: 'Zombieland: Double Tap',
    genre_ids: [28, 35, 27],
    title: 'Zombieland: Double Tap',
    vote_average: 7.5,
    overview:
      'The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.',
    release_date: '2019-10-18'
  },
  {
    popularity: 126.487,
    vote_count: 1166,
    video: false,
    poster_path: '/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg',
    id: 559969,
    adult: false,
    backdrop_path: '/ijiE9WoGSwSzM16zTxvUneJ8RXc.jpg',
    original_language: 'en',
    original_title: 'El Camino: A Breaking Bad Movie',
    genre_ids: [80, 18, 53],
    title: 'El Camino: A Breaking Bad Movie',
    vote_average: 7.1,
    overview:
      'In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.',
    release_date: '2019-10-11'
  },
  {
    popularity: 79.185,
    vote_count: 430,
    video: false,
    poster_path: '/d0FWbzrmm99BTfUqf1Lbjl2zu3S.jpg',
    id: 417384,
    adult: false,
    backdrop_path: '/qBI3Spq93lNxGzecdGpbwV5lOvU.jpg',
    original_language: 'en',
    original_title: 'Scary Stories to Tell in the Dark',
    genre_ids: [27, 53],
    title: 'Scary Stories to Tell in the Dark',
    vote_average: 6.3,
    overview:
      'Mill Valley, Pennsylvania, Halloween night, 1968. After playing a joke on a school bully, Sarah and her friends decide to sneak into a supposedly haunted house that once belonged to the powerful Bellows family, unleashing dark forces that they will be unable to control.',
    release_date: '2019-08-09'
  },
  {
    popularity: 87.382,
    vote_count: 3889,
    video: false,
    poster_path: '/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg',
    id: 420817,
    adult: false,
    backdrop_path: '/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg',
    original_language: 'en',
    original_title: 'Aladdin',
    genre_ids: [12, 35, 14, 10749, 10751],
    title: 'Aladdin',
    vote_average: 7.1,
    overview:
      'A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.',
    release_date: '2019-05-24'
  },
  {
    popularity: 77.814,
    vote_count: 55,
    video: false,
    poster_path: '/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg',
    id: 568012,
    adult: false,
    backdrop_path: '/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg',
    original_language: 'ja',
    original_title: 'ワンピーススタンピード',
    genre_ids: [28, 12, 16],
    title: 'One Piece: Stampede',
    vote_average: 7.6,
    overview:
      "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
    release_date: '2019-10-24'
  },
  {
    popularity: 92.86,
    vote_count: 1762,
    video: false,
    poster_path: '/zfE0R94v1E8cuKAerbskfD3VfUt.jpg',
    id: 474350,
    adult: false,
    backdrop_path: '/8moTOzunF7p40oR5XhlDvJckOSW.jpg',
    original_language: 'en',
    original_title: 'It Chapter Two',
    genre_ids: [27],
    title: 'It Chapter Two',
    vote_average: 6.9,
    overview:
      "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
    release_date: '2019-09-06'
  },
  {
    popularity: 68.49,
    vote_count: 40,
    video: false,
    poster_path: '/cEr3S3Atr4eRlHmMOA1GvaX0f4p.jpg',
    id: 560362,
    adult: false,
    backdrop_path: '/meEuc9El2efDGZMARPjd4u4qHhd.jpg',
    original_language: 'en',
    original_title: 'Rattlesnake',
    genre_ids: [18, 27, 9648, 53],
    title: 'Rattlesnake',
    vote_average: 5.6,
    overview:
      'After a mysterious woman saves her daughter from a deadly snakebite, a single mother must repay the debt by killing a stranger before sundown.',
    release_date: '2019-10-25'
  },
  {
    popularity: 47.7,
    vote_count: 214,
    video: false,
    poster_path: '/bIID8uZTYNnSMfWwaIluRTzaZQL.jpg',
    id: 483202,
    adult: false,
    backdrop_path: '/a6WTWBgM7O8wEmCJuGLpPM15agH.jpg',
    original_language: 'en',
    original_title: 'Eli',
    genre_ids: [27],
    title: 'Eli',
    vote_average: 6,
    overview:
      'A boy named Eli with a rare autoimmune disorder is confined to a special experimental clinic for his treatment. He soon begins experiencing supernatural forces, turning the supposedly safe facility into a haunted prison for him and his fellow patients.',
    release_date: '2019-10-18'
  },
  {
    popularity: 59.027,
    vote_count: 11094,
    video: false,
    poster_path: '/5vHssUeVe25bMrof1HyaPyWgaP.jpg',
    id: 245891,
    adult: false,
    backdrop_path: '/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg',
    original_language: 'en',
    original_title: 'John Wick',
    genre_ids: [28, 53],
    title: 'John Wick',
    vote_average: 7.2,
    overview:
      'Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.',
    release_date: '2014-10-24'
  },
  {
    popularity: 99.5,
    vote_count: 417,
    video: false,
    poster_path: '/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg',
    id: 453405,
    adult: false,
    backdrop_path: '/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg',
    original_language: 'en',
    original_title: 'Gemini Man',
    genre_ids: [28, 53],
    title: 'Gemini Man',
    vote_average: 5.8,
    overview:
      'Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.',
    release_date: '2019-10-11'
  }
]

import React from 'react';
import interstellar from '../assets/images/interstellar.jpg';
import asur from '../assets/images/asur-season-2-1685861577.jpeg';
import strangerthings from '../assets/images/strangerthingscov2.jpg';
import thegunforhire from '../assets/images/thegunforhire.jpg';
import betterthanmovies from '../assets/images/betterthanmovies.jpg';
import Us from '../assets/images/horror.jpg';

export const MovieData = [
  {
    title: 'Interstellar',
    rating: 5,
    body: 'Sci-Fi',
    key: '1',
    image: interstellar,
    releaseYear: '7 Nov, 2014',
    cast: [
      {name: 'Matthew McConaughey as Joseph Cooper'},
      {name: 'Jessica Chastain as Murph'},
      {name: 'Anne Hathaway as Brand'},
      {name: 'Michael Caine as Professor Murph'},
      {name: 'Jessica Chastain as Murph'},
    ],
  },
  {
    title: 'Asur',
    rating: 4.5,
    body: 'Crime',
    key: '2',
    image: asur,
    releaseYear: '2 June, 2023',
    cast: [
      {
        name: 'Arshad Warsi as Dhananjay Rajpoot',
      },
      {
        name: 'Barun Sobit as Nikhil',
      },
      {
        name: 'Anupriya Goenka as Shubh',
      },
      {
        name: 'Abhishek Chauhan as Naina',
      },
    ],
  },
  {
    title: 'Stranger Things',
    rating: 3.5,
    body: 'Suspense',
    key: '3',
    image: strangerthings,
    releaseYear: "15 July, 2016",
    cast:[
      {
        name: 'Millie Bobby Brown as Eleven',
      },
      {
        name: 'Finn WolfHard as Mike',
      },
      {
        name: 'Noah Schnapp as Will',
      },
      {
        name: 'Saddie Sink as Max',
      },
    ]
  },
  {
    title: 'The Gun For Hire',
    rating: 4.0,
    body: 'Entertainment',
    key: '4',
    image: thegunforhire,
  },
  {
    title: 'Better Than Movies',
    rating: 4.3,
    body: 'Entertainment',
    key: '5',
    image: betterthanmovies,
  },
  {
    title: 'Us',
    rating: 4.3,
    body: 'Horror',
    key: '6',
    image: Us,
  },
];

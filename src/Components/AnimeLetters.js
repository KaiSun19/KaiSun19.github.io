import { Typography } from '@mui/material';
import React from 'react';
import '../Styles/AnimeLetters.scss';

function AnimeLetters({letterClass, letterArray, idx}) {

  return (
      <span>
          {letterArray.map(
              (char, i) =>{
                  return(
                      <span className={`${letterClass} _${i + idx}`} key={char + i}> 
                          <Typography variant="h2" component="div" gutterBottom className='h2_char'>{char}</Typography>
                        </span>
                  )
              }
          )
          }
      </span>
  )
}

export default AnimeLetters
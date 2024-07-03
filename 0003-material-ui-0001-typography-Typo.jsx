import { Typography } from '@mui/material'
import React from 'react'

function Typo() {
  return (
    <div>

        <Typography variant='body1' align='right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, necessitatibus!</Typography>

        <Typography variant='body2' align='left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia rem totam voluptatum accusantium quibusdam repudiandae!</Typography>

        <Typography variant='h6'>H6 Lorem, ipsum dolor.</Typography>

        <Typography variant='h5'>H5 Lorem, ipsum dolor.</Typography>

        <Typography variant='h4'>H4 Lorem, ipsum dolor.</Typography>

        <Typography variant='h3'>H3 Lorem, ipsum dolor.</Typography>

        <Typography variant='h2'>H2 Lorem, ipsum dolor.</Typography>

        <Typography variant='h1'>H1 Lorem, ipsum dolor.</Typography>

        <Typography variant='h1' component='h5' align='center'>H1 Lorem, ipsum dolor.</Typography>

        <Typography variant='subtitle1'>Subtitle 1 Lorem ipsum dolor sit amet.</Typography>

        <Typography variant='subtitle2'>Subtitle 2 Lorem ipsum dolor sit amet.</Typography>

    </div>
  )
}

export default Typo

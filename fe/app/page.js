'use client'

import Image from 'next/image'
import { Grid, Container, Box, Typography, Button } from '@mui/material'
import Link from 'next/link'

export default function Dashboard() {

  return (
    <Grid direction={'column'} alignItems={'center'} spacing={2} container>
      <Grid item pt={10}>
        <Image src="/quizify-headline.png" alt='Quizify Logo' width={350} height={323.63} />
      </Grid>
      <Grid item>
        <Typography component="div" color={'primary'} fontFamily={'Poppins'} align='center'>Tes pengetahuanmu dengan kuis-kuis seru dan menarik dari <Box fontWeight={'bold'}>Quizify!</Box></Typography>
      </Grid>
      <Grid item>
        <Link href={'/question'}>
          <Button variant='contained'>Mulai</Button>
        </Link>
      </Grid>
    </Grid>
  )
}

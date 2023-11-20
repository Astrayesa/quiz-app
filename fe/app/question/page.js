import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const questions = [
    {
        title: "Siapa yang membersihkan hama di desa?",
        answer: "Burung hantu",
        options: [
            { option: "Burung Hantu", isCorrect: true, id: "A" },
            { option: "Tikus", isCorrect: false, id: "B" },
            { option: "Gagak", isCorrect: false, id: "C" },
            { option: "Ular", isCorrect: false, id: "D" }
        ],
        correctAnswer: "Burung Hantu",
    }
]

export default function Question() {
    return <Grid container direction={'column'} alignItems={'center'} pt={20}>
        <Grid item sx={{
            height: 422,
            bgcolor: 'primary.main'
        }}>
            {
                questions.map(
                    (question) =>
                        <Grid item container key={question.id} xs={6} bgcolor={'primary.main'} alignItems={'center'}>
                            <Grid item>
                                <Typography sx={{
                                    height: 60,
                                    lineHeight: '60px'
                                }} textAlign={'center'}>
                                    {question.title}
                                </Typography>
                            </Grid>

                            <Grid item container alignContent={'center'}>
                                {
                                    question.options.map(
                                        (option) =>
                                            <Grid key={option.id} item xs={6} width={329} height={80} bgcolor={'secondary.main'}>
                                                {option.option}
                                            </Grid>
                                    )
                                }
                            </Grid>
                        </Grid>
                )
            }
        </Grid>
    </Grid>
}
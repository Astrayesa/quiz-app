import { Container } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";

export default function ChildLayout({ children }) {
    return <>
        <Container maxWidth='false' sx={{
            marginTop: '10px'
        }}>
            <Link href={'/'}>
                <Image src="/icon.png" alt='Quizify Logo' width={60} height={60} />
            </Link>
        </Container>
        {children}
    </>
}
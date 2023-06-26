import { Container, Space, Title, Text, Card, Image, Grid  } from "@mantine/core"
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai"
import bowserJr from "./img/bowserJr.png"

export default function LikePhotoApp() {
    
    let like = false;

    return (
    <Container size="20rem" px={0}>
        <Space h="xl" />

        <Title order={3} size="h1" align="center">
            Like Photo App
        </Title>

        <Space h="xl" />

        <Title size="h4" align="center">Likes</Title>

        <Space h="xl" />

        <Card
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
        >
            <Text weight={500} fz="xl" mt="md" align="center" fw={700}>
                Bowser Jr
            </Text>

            <Space h="xl" />

            <Card.Section height={400}>
                <Image
                src={bowserJr}
                height={300}
                alt="Bowser Jr jumping"
                />
            </Card.Section>

            <Card.Section inheritPadding mt="sm" pb="md">
                <Grid>
                    <Grid.Col span="auto"><AiOutlineComment /> </Grid.Col>
                    <Grid.Col span={2}>{like ? (<AiFillHeart />) : (<AiOutlineHeart />)}</Grid.Col>
                </Grid>
            </Card.Section>
        </Card>
    </Container>
    )
}
import { Container, Space, Title, Text, Card, Image, Grid  } from "@mantine/core"
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai"
import bowserJr from "./img/bowserJr.png"
import { useState } from "react";

export default function LikePhotoApp() {
    
    // let like = false;
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const toggleLike = () => {
        if (!like) {
            setLike(true);
            setCount(count + 1);
        } else {
            setLike(false);
            setCount(count - 1);
        }
    }


    return (
    <Container size="20rem" px={0}>
        <Space h="xl" />

        <Title order={3} size="h1" align="center">
            Like Photo App
        </Title>

        <Space h="xl" />

        <Title size="h4" align="center">Likes {count}</Title>

        <Space h="xl" />

        <Card
            shadow="sm"
            padding="xl"
            component="a"
            target="_blank"
        >
            <Text weight={500} fz="xl" mt="md" align="center" fw={700}>
                Bowser Jr
            </Text>

            <Space h="xl" />

            <Card.Section height={400} color="red">
                <Image
                src={bowserJr}
                height={500}
                alt="Bowser Jr jumping"
                />
            </Card.Section>

            <Card.Section inheritPadding mt="sm" pb="md">
                <Grid>
                    <Grid.Col span="auto" fz="xl"><AiOutlineComment /> </Grid.Col>
                    <Grid.Col span={2} fz="xl">{like ? (<AiFillHeart color="red" onClick={toggleLike} />) : (<AiOutlineHeart onClick={toggleLike} />)}</Grid.Col>
                </Grid>
            </Card.Section>
        </Card>
    </Container>
    )
}
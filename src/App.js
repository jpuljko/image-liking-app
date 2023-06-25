import { Title, Space, Container, Card, Image, Text } from "@mantine/core";

function App() {
  return (
    <div className="App">
    <Container size="30rem" px={0}>
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
        DogyDog
      </Text>

      <Space h="xl" />

      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          height={160}
          alt="No way!"
        />
      </Card.Section>

      
    </Card>
    </Container>
    </div>
  );
}

export default App;

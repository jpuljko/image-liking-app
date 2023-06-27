import { Container, MantineProvider } from "@mantine/core";
import LikePhotoApp from "./LikePhotoApp";

function App() {
  return (
    <Container>
          <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        colors: {
          // override dark colors to change them for all components
          dark: [
            '#d5d7e0',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            '#1d1e30',
            '#0c0d21',
            '#01010a',
          ],
        },
      }}
    >
      <LikePhotoApp />
    </MantineProvider>
      
    </Container>
    
  );
}

export default App;

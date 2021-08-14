import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function PasswordInput() {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="SFTP password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
}

function App() {
// 2. Use at the root of your app
    return (
        <ChakraProvider>
            <h2>Hello from React!</h2>

            <SimpleGrid columns={1} spacing={10}>
                <Input placeholder="SFTP login" />
                <PasswordInput />
                <Input placeholder="Path to filesourse" />
            </SimpleGrid>

            <Button colorScheme="blue">Send to repository</Button>
        </ChakraProvider>
    )
}

function render() {
    ReactDOM.render(<App />, document.getElementById('container'));
}

render();

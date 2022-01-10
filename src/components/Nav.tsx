import { SearchIcon } from "@chakra-ui/icons";
import {
    Box,
    Container,
    Heading,
    IconButton,
    Input,
    InputGroup,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import theme from "../misc/theme";

const Nav = ({ setQuery }: { setQuery: Dispatch<SetStateAction<string>> }) => {
    const [input, setInput] = useState("");

    const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log(ev.target.value);
        setInput(ev.target.value);
    };

    const onSearchClick = () => {
        setQuery(input);
        console.log("i was clicked");
    };

    return (
        <div style={{ position: "sticky", top: "0", zIndex: 10 }}>
            <Box
                // position="fixed"
                as="nav"
                w="100%"
                bg={`${theme.backgroundAlt}AA`}
                css={{ backdropFilter: "blur(10px)" }}
                zIndex={10}
            >
                <Container
                    display="flex"
                    maxW="container.xl"
                    w="100%"
                    p="5"
                    color="white"
                    wrap="wrap"
                    align="center"
                    justify="space-between"
                >
                    <Heading>Fly me to the Moon</Heading>
                    <InputGroup>
                        <Input
                            placeholder="Search"
                            m="1"
                            onChange={onInputChange}
                            value={input}
                        />
                        <IconButton
                            bg={theme.primaryColor}
                            aria-label="Search"
                            icon={<SearchIcon />}
                            m="1"
                            onClick={onSearchClick}
                        />
                    </InputGroup>
                </Container>
            </Box>
        </div>
    );
};

export default Nav;

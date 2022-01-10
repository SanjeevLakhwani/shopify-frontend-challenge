import { Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ImageGrid from "./components/ImageGrid";
import Nav from "./components/Nav";
import apiGet, { APIResponse, DefaultResponse, Item } from "./misc/api";
import theme from "./misc/theme";

function App() {
    const [query, setQuery] = useState<string>("wildlife");
    const [images, setImages] = useState<Item[]>([]);

    useEffect(() => {
        apiGet(query)
            .then((response) => response.json())
            .then((res: APIResponse) => res.collection.items)
            .then((items) => {
                setImages(items.slice(0, 10));
            });
    }, [query]);

    return (
        <div className="App">
            <Nav setQuery={setQuery} />
            <ImageGrid data={images} />
            <Heading
                as="h1"
                fontSize="20vw"
                position="fixed"
                top="50%"
                left="50%"
                zIndex={1}
                isTruncated
                transform="translate(-50%,-50%)"
                color={theme.textAlt}
            >
                {query}
            </Heading>
        </div>
    );
}

export default App;

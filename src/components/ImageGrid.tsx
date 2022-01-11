import { Container, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import DisplayCard from "./DisplayCard";
import { Item } from "../misc/api";
import FadeIn from "react-fade-in";

function useForceUpdate() {
    const [_, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update the state to force render
}

const ImageGrid = ({ data }: { data: Item[] }) => {
    const [likedImages, setLikedImages] = useState<string[]>(
        JSON.parse(localStorage.getItem("liked") || "[]")
    );
    localStorage.setItem("liked", JSON.stringify(likedImages));

    const forceUpdate = useForceUpdate();

    const onLikeClick = (id: string) => {
        if (likedImages.includes(id)) {
            setLikedImages(likedImages.filter((val) => val !== id));
        } else {
            const copy = likedImages;
            copy.push(id);
            setLikedImages(copy);
        }
        forceUpdate();
    };

    let rows: React.ReactElement[] = [];
    data.forEach((value) => {
        rows.push(
            <DisplayCard
                hrefLink={value.href}
                title={value.data[0].title}
                desc={value.data[0].description}
                date={value.data[0].date_created}
                id={value.data[0].nasa_id}
                onLikeClick={onLikeClick}
                isLiked={likedImages.includes(value.data[0].nasa_id)}
            />
        );
    });

    return (
        <div>
            <Container maxW={"container.xl"} marginY="40px">
                <SimpleGrid
                    as={FadeIn}
                    minChildWidth="400px"
                    spacingX="5"
                    spacingY="10"
                >
                    {rows}
                </SimpleGrid>
            </Container>
        </div>
    );
};

export default ImageGrid;

import { Box, Container, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { getImageLink } from "../misc/api";
import theme from "../misc/theme";
import Heart from "./Heart";

const DisplayCard = ({
    hrefLink,
    title,
    desc,
    date,
    id,
    onLikeClick,
    isLiked,
}: {
    hrefLink: string;
    title: string;
    desc: string;
    date: Date;
    id: string;
    onLikeClick: (id: string) => void;
    isLiked: boolean;
}) => {
    const [image, setImage] = useState("");

    getImageLink(hrefLink)
        .then((res) => res.json())
        .then((res) => {
            console.log(res[0]);
            setImage(res[res.length - 2]);
        });

    return (
        <div>
            <Box
                w="375px"
                h="450px"
                bg={theme.backgroundAlt}
                overflow="hidden"
                borderRadius="lg"
                boxShadow={`-10px 10px 30px #000000`}
                zIndex={4}
                position="sticky"
                opacity="90%"
            >
                <Container
                    h="275px"
                    overflow="hidden"
                    p="0"
                    backgroundImage={`linear-gradient(rgba(30, 30, 30, 0.1), rgba(0, 0, 0, 0.4)), url(${image})`}
                    backgroundSize="cover"
                >
                    {/* <Image
                        src={image}
                        fit="cover"
                        alt="Image"
                        boxShadow="inset 0 -40px white"
                    /> */}
                    <Heart
                        id={id}
                        onLikeClick={onLikeClick}
                        isLiked={isLiked}
                    />
                </Container>
                <Container p="10px">
                    <Text noOfLines={2}>{`${date
                        .toString()
                        .substring(0, 10)} • ${title}`}</Text>
                    <Text noOfLines={4} fontWeight="light">
                        {desc}
                    </Text>
                </Container>
            </Box>
        </div>
    );
};

export default DisplayCard;

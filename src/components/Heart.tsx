import { Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import theme from "../misc/theme";
const Heart = ({
    id,
    onLikeClick,
    isLiked,
}: {
    id: string;
    onLikeClick: (id: string) => void;
    isLiked: boolean;
}) => {
    return (
        <Icon
            as={isLiked ? AiFillHeart : AiOutlineHeart}
            color={theme.primaryColor}
            position="sticky"
            top="225px"
            left="325px"
            w="9"
            h="9"
            onClick={() => {
                onLikeClick(id);
            }}
            zIndex={9}
        />
    );
};

export default Heart;

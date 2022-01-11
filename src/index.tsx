import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./misc/theme";
import reportWebVitals from "./reportWebVitals";

const chakraTheme = extendTheme({
    styles: {
        global: {
            "html, body": {
                color: theme.text,
                "background-color": theme.background,
                "font-family": "'Be Vietnam Pro', sans-serif",
                "font-weight": "light",
            },
            a: {
                color: theme.primaryColor,
            },
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={chakraTheme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

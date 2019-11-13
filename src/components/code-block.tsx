import React, { useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import MDX from "@mdx-js/runtime";
import { Div, Flex, Grid } from "ui/components";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { ThemeProvider, useThemeUI } from "theme-ui";
import * as themeComponents from "@theme-ui/components";
import * as themes from "ui/theme";
import { path } from "ramda";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";

const scope = { Page: Div };

const components = {
  ...themeComponents,
  wrapper: ({ children }: any) => <>{children}</>,
  Div,
  Flex,
  Grid,
  TypeScale,
  TypeStyle,
  ColorPalette
};

const Root = (props: any) => {
  const { theme } = useThemeUI();
  if (!theme) {
    return <Div>invalid theme</Div>;
  }
  return (
    <Flex fxd="column" minh="100vh" h="100%">
      <Div
        flex="1"
        h="100%"
        bg={path(["colors", "background"], theme)}
        color={path(["colors", "text"], theme)}
        {...props}
      />
    </Flex>
  );
};

const Button = (props: any) => {
  const B = themeComponents.Button;
  return (
    <Div pos="sticky" top={0} zIndex={3}>
      <Div pos="absolute" right={0} z={1} {...props}>
        <B {...props} />
      </Div>
    </Div>
  );
};

const EditWindow = styled.div({
  maxWidth: "50%",
  background: "white"
});

const LiveCodeBlock = ({ setCode, code }: any) => {
  const [editing, setEditing] = useState(false);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [theme, setTheme] = useState<keyof typeof themes>("dark");
  useEffect(() => {
    try {
      setError("");
      const render = async ()=>{
      setPreview(
        renderToStaticMarkup(
          <ThemeProvider theme={themes[theme] || themes.system}>
            <Root>
              <MDX scope={{ ...scope, setTheme }} components={components}>
                {code}
              </MDX>
            </Root>
          </ThemeProvider>
        )
      );
      }
      render();
    } catch (err) {
      setError(
        renderToStaticMarkup(
          <div>
            <h2>{err.name}</h2>
            <p>{err.message}</p>
          </div>
        )
      );
    }
  }, [code, theme]);

  return (
    <>
      <ThemeProvider theme={themes[theme] || themes.system}>
        <Button onClick={() => setEditing(!editing)}>
          {editing ? "done" : "edit"}
        </Button>
      </ThemeProvider>
      <Flex fxd="row">
        <Flex fxd="column" fx="1">
          <div style={{height:"100%"}} dangerouslySetInnerHTML={{ __html: preview }} />
          <Div pos="sticky" bottom="0" bg="white">

            <div dangerouslySetInnerHTML={{ __html: error }} />
            </Div>
        </Flex>
        {editing && (
          <EditWindow>
            <SimpleMDEReact
              value={code}
              onChange={setCode}
              options={{
                autofocus: true
              }}
            />
          </EditWindow>
        )}
      </Flex>
    </>
  );
};

export default LiveCodeBlock;

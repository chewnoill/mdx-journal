import styled from "@emotion/styled";
import {
  BackgroundSetProps,
  DisplaySetProps,
  FlexSetProps,
  GridSetProps,
  LayoutSetProps,
  SpaceSetProps,
  GlobalSetProps,
  backgroundSet,
  displaySet,
  flexSet,
  gridSet,
  layoutSet,
  globalSet,
  GlobalSetStyle
} from "onno-react";

type DivProps = GlobalSetProps &
  {style?: GlobalSetStyle} &
  BackgroundSetProps &
  DisplaySetProps &
  LayoutSetProps &
  SpaceSetProps &
  FlexSetProps &
  GridSetProps

const divProps = [globalSet, backgroundSet, displaySet, layoutSet, flexSet, gridSet];

export const Div = styled.div<DivProps>(divProps);

export const Flex = styled(Div)<DivProps>({
  display: "flex"
});

export const Grid = styled(Div)<DivProps>({
  display: "grid"
});

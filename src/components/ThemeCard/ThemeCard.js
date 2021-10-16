import React, { useState, useEffect } from "react";
import {
  StyledCardTitle,
  StyledCardBody,
  StyledWrapper,
  StyledToggle,
  StyledSwitch,
} from "./ThemeCard.style";
import ColorPalette from "../ColorPalette/ColorPalette";
import _ from "lodash";
import { useTheme } from "../../theme/useTheme";
import { getFromLS } from "../../utils/storage";

const ThemeCard = (props) => {
  const themeFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themeFromStore.data);
  const { setMode } = useTheme();

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme);
    props.setter(selectedTheme);
    props.switches.some((theme) =>
      theme?.theme?.name.toUpperCase() === selectedTheme.name.toUpperCase()
        ? switchTheme(props.switches.indexOf(theme))
        : ""
    );
  };

  const switchTheme = (themeIndex) => {
    props.setSwitches(
      props.switches.map((theme) =>
        props.switches.indexOf(theme) === themeIndex && theme.selected === false
          ? { ...theme, selected: true }
          : { ...theme, selected: false }
      )
    );
  };

  useEffect(() => {
    props.setSwitches(props.switches);
  }, [props, props.switches]);

  return (
    <StyledWrapper theme={data[_.camelCase(props.theme.theme.name)]}>
      <StyledCardBody>
        <StyledCardTitle>{props.theme.theme.name}</StyledCardTitle>
        <StyledToggle
          onClick={() => themeSwitcher(props.theme.theme)}
          active={props.theme.selected}
        >
          <StyledSwitch active={props.theme.selected}></StyledSwitch>
        </StyledToggle>
      </StyledCardBody>
      <ColorPalette
        theme={data[_.camelCase(props.theme.theme.name)]}
      ></ColorPalette>
    </StyledWrapper>
  );
};

export default ThemeCard;

export const getIcon = (iconName: string) => {
    const src =
        'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/6231688b36311be3ed337868e322258c1cb5f2f3/SVG/1st%20Set%20-%20Color/';

    return src + `${iconName}.svg`;
};

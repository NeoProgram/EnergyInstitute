import useSettings from "app/hooks/useSettings";

export default function MatxLogo({ className }) {
  const { settings } = useSettings();
  const theme = settings.themes[settings.activeTheme];

  return (
    <img src="/assets/images/favicon-32x32.png" alt="Logo" />
    //<img src="/assets/images/Hearts-and-minds-logo.png" alt="Logo" style={{backgroundColor: "#ffffff", width: "100%", height:"auto" }}/>

  );
}

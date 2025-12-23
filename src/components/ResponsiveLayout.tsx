import MobileLayout from "./Mobile_LP";
import DesktopLayout from "./Desktop_LP";
import { useMediaQuery } from "../hooks/useMediaQuery";

const DESKTOP_BREAKPOINT = "(min-width: 1024px)";

export default function ResponsiveLayout() {
  const isDesktop = useMediaQuery(DESKTOP_BREAKPOINT);

  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
}

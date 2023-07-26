import {DM_Sans, Inter, Playfair} from "next/font/google";

const inter = Inter({
    weight: "variable",
    subsets: ["latin"],
});

const dm_sans = DM_Sans({
    weight: ["400", "500", "700", "400", "500", "700"],
    subsets: ["latin"]
});

const playfair = Playfair({
    weight: "variable",
    subsets: ["latin"],
});

export { inter, dm_sans, playfair };

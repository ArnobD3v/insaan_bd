import { Archivo,Oswald, Lusitana} from "next/font/google";


export const archivo = Archivo({ subsets: ["latin"] });
export const oswald = Oswald({ subsets: ["latin"] });
// Secondary font
export const lusitana  = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
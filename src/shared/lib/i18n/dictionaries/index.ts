import type { Locale } from "../locales";
import type { Dictionary } from "./en";
import { en } from "./en";
import { ru } from "./ru";
import { es } from "./es";
import { tr } from "./tr";
import { uk } from "./uk";
import { de } from "./de";
import { sq } from "./sq";
import { hy } from "./hy";
import { az } from "./az";
import { be } from "./be";
import { bs } from "./bs";
import { ka } from "./ka";
import { kk } from "./kk";
import { ky } from "./ky";
import { ro } from "./ro";
import { mn } from "./mn";
import { mk } from "./mk";
import { sr } from "./sr";
import { tg } from "./tg";
import { tk } from "./tk";
import { uz } from "./uz";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ru,
  es,
  tr,
  uk,
  de,
  sq,
  hy,
  az,
  be,
  bs,
  ka,
  kk,
  ky,
  ro,
  mn,
  mk,
  sr,
  tg,
  tk,
  uz,
};

export type { Dictionary };

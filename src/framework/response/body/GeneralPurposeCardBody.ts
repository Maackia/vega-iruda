import { ResponseBody } from './ReponseBody';

export class GeneralPurposeCardBody implements ResponseBody {
  readonly #DEFAULT_ICON = 'https://mycast.xyz/assets/image/login/logo-300.png';
  readonly #DEFAULT_TITLE = 'Untitled';
  readonly #DEFAULT_ORIENTATION = 'horizontal';

  #link: string;
  #icon: string;
  #title: string;
  #subtitle: string;
  #newWindow: boolean;
  #orientation: OrienationOption;

  public constructor(option: GeneralPurposeCardBodyOption) {
    this.#link = option.link || '';
    this.#title = option.title || this.#DEFAULT_TITLE;
    this.#icon = option.icon || this.#DEFAULT_ICON;
    this.#subtitle = option.subtitle || '';
    this.#newWindow = option.newWindow || false;
    this.#orientation = option.orientation || this.#DEFAULT_ORIENTATION;
  }

  public serialize(): string {
    return JSON.stringify({
      link: this.#link,
      icon: this.#icon,
      title: this.#title,
      subtitle: this.#subtitle,
      newWindow: this.#newWindow,
      orientation: this.#orientation,
    });
  }
}

export type GeneralPurposeCardBodyOption = {
  link?: string;
  title?: string;
  icon?: string;
  subtitle?: string;
  newWindow?: boolean;
  orientation?: OrienationOption;
};

export type OrienationOption = 'horizontal' | 'vertical';

import { Icon } from "../flyweights/icon";

export class IconFactory {
  private static icons: Map<string, Icon> = new Map();

  public static getIcon(type: string): Icon {
    if (!this.icons.has(type)) {
      const iconPath = `assets/icons/${type}.png`;
      const icon = new Icon(type, iconPath);
      this.icons.set(type, icon);
      console.log(`Criando novo ícone para o tipo: ${type}`);
    }
    return this.icons.get(type)!;
  }
}

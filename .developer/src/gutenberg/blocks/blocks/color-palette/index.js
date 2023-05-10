import { ColorPalette } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { useState } from "@wordpress/element";

// Registra el bloque de la paleta de colores con los atributos color y colors
registerBlockType("quadlayers/color-palette-block", {
  title: __("Color Palette Block", "gutenberg-examples"),
  icon: "universal-access-alt",
  category: "quadlayers",
  attributes: {
    color: {
      type: "string",
      default: "#f00",
    },
    colors: {
      type: "array",
      default: [
        { name: "red", color: "#f00" },
        { name: "white", color: "#fff" },
        { name: "blue", color: "#00f" },
      ],
    },
  },
  edit: (props) => {
    const { attributes, setAttributes } = props;
    // Al editarlo, establece el atributo color con el que recibe en el evento
    const onChangeColor = (color) => {
      setAttributes({ color: color });
    };

    // Componente paleta de colores que recibe los colores totales y el color por defecto
    return (
      <div>
        <div
          style={{
            backgroundColor: attributes.color,
            width: "90%",
            height: 30,
          }}
        >
          <span>This is the expected result (Edit)</span>
        </div>
        <ColorPalette
          colors={attributes.colors}
          value={attributes.color}
          disableCustomColors={true}
          clearable={false}
          onChange={onChangeColor}
        />
      </div>
    );
  },
  // Se hace destructuring para sacar los atributos color y colors para pasarselos al componente
  save: (props) => {
    const { attributes } = props;
    // Al editarlo, establece el atributo color con el que recibe en el evento
    const [color, setColor] = useState("");
    const onChangeColor = (color) => {
      setColor(color);
    };

    // Componente paleta de colores que recibe los colores totales y el color por defecto
    return (
      <div>
        <div
          style={{
            backgroundColor: attributes.color,
            width: "90%",
            height: 30,
          }}
        >
          <span>This is the expected result (Save)</span>
        </div>
        <ColorPalette
          colors={attributes.colors}
          value={color}
          disableCustomColors={true}
          clearable={false}
          onChange={onChangeColor}
        />
      </div>
    );
  },
});

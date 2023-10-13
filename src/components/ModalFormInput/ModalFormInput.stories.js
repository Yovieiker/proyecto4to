import { ModalFormInput } from ".";

export default {
  title: "Components/ModalFormInput",
  component: ModalFormInput,
  argTypes: {
    size: {
      options: ["large", "mini", "tiny", "extra-large", "medium"],
      control: { type: "select" },
    },
    status: {
      options: ["desabled", "error", "active", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    status: "desabled",
    className: {},
    groupClassName: {},
    text: "Text",
    divClassName: {},
    text1: "Placeholder",
  },
};

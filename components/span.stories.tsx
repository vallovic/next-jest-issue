import { Meta, StoryObj } from "@storybook/react";
import Span from "./span";

const meta: Meta<typeof Span> = {
  title: "Components/Span",
  component: Span,
};

export default meta;
type Story = StoryObj<typeof Span>;

export const Default: Story = {};
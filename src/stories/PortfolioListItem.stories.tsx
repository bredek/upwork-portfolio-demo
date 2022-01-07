import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PortfolioListItem } from "../components/PortfolioListItem/PortfolioListItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Test/PortfolioListItem",
  component: PortfolioListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    imgSource: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
} as ComponentMeta<typeof PortfolioListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PortfolioListItem> = (args) => (
  <PortfolioListItem {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  imgSource:
    "https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg",
  title: "Homescore - Real Estate",
  description:
    "Homescore is an innovative real estate app that uses a customized algorithm to rank properties by proximity to important places, schools, and many other factors.",
};

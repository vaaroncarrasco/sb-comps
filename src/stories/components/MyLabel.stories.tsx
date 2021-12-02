import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: { control: 'color' }
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel>  = (args) => <MyLabel { ...args } />

// ? binding object to cut {} reference
// -> bind creates copy // -> prevents mutating {}s
export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary' // primary | secondary | tertiary
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary'
}

// CustomFontColor
// fontColor: #5517ac
// size: h1

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#5517ac'
}
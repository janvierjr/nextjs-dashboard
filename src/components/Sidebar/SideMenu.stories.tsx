import React from 'react';
import Sidebar, { SidebarProps } from './Sidebar';

export default {
  children: '',
  title: 'Component/Sidebar',
  component: Sidebar,
};

const Template = (args: SidebarProps) => {
  return (
    <Sidebar {...args} />
  )
};

const props = {
  defaultProps: () => ({

  }),
};

export const SidebarStory: any = Template.bind({});
const defaultProps = props.defaultProps();
SidebarStory.storyName = 'Sidebar';
SidebarStory.args = {
  ...defaultProps,
};
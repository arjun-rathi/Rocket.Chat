import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { useAutoSequence } from '../../hooks/useAutoSequence';
import BurgerIcon from './BurgerIcon';

export default {
	title: 'Community/Components/Burger Menu/BurgerIcon',
	component: BurgerIcon,
	parameters: {
		layout: 'centered',
		controls: { hideNoControlsWarning: true },
	},
} as ComponentMeta<typeof BurgerIcon>;

export const Example: ComponentStory<typeof BurgerIcon> = () => {
	const open = useAutoSequence([false, true]);

	return <BurgerIcon open={open} />;
};

const Template: ComponentStory<typeof BurgerIcon> = (args) => <BurgerIcon {...args} />;

export const Closed = Template.bind({});
Closed.args = {
	open: false,
};

export const Open = Template.bind({});
Open.args = {
	open: true,
};

import React from 'react';
import { useMutableCallback } from '@rocket.chat/fuselage-hooks';

import UserInfo from '../../channel/UserInfo';
import VerticalBarOldActions from './components/VerticalBarOldActions';
import { useRouteParameter, useRoute, useCurrentRoute } from '../../contexts/RouterContext';
import { useUserId } from '../../contexts/UserContext';
import { useRoom } from './providers/RoomProvider';
import { useTab } from './providers/ToolboxProvider';

const MemberListRouter = ({ tabBar, rid }) => {
	const username = useRouteParameter('context');
	const room = useRoom();
	const ownUserId = useUserId();

	const [currentRoute, params] = useCurrentRoute();
	const router = useRoute(currentRoute);

	const onClose = useMutableCallback(() => router.push({ ...params, tab: 'members-list', context: '' }));

	const tab = useTab();

	if ((tab.id === 'members-list' || tab.id === 'user-info-group') && !username) {
		return <VerticalBarOldActions {...tab} name={'membersList'} template={'membersList'} tabBar={tabBar} rid={rid} _id={rid} />;
	}

	return <UserInfo {...username ? { username, onClose } : { uid: room.uids.filter((uid) => uid !== ownUserId).shift() }} rid={rid}/>;
};

export default MemberListRouter;
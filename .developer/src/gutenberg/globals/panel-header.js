import { IconButton } from '@wordpress/components'

import { __ } from '@wordpress/i18n'

export default (props) => {

	const {
		isPinned,
		isPinnable,
		togglePin,
		closeGeneralSidebar
	} = props

	return (
		<div className="ct-panel-options-header components-panel__header edit-post-sidebar-header">
			<strong>
				{__('Globals', 'blocksy')}
			</strong>
			{isPinnable && (
				<IconButton
					icon={
						isPinned
							? 'star-filled'
							: 'star-empty'
					}
					label={
						isPinned
							? __(
								'Unpin from toolbar',
								'blocksy'
							)
							: __(
								'Pin to toolbar',
								'blocksy'
							)
					}
					onClick={togglePin}
					isPressed={isPinned}
					aria-expanded={isPinned}
				/>
			)}
			<IconButton
				onClick={closeGeneralSidebar}
				icon="no-alt"
				label={__('Close plugin', 'blocksy')}
			/>
		</div>
	)
}
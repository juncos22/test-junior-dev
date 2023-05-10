import {
	useRef,
	useState
} from '@wordpress/element'

import { handleMetaboxValueChange } from './editor/sync'

import { __ } from '@wordpress/i18n'

import {
	OptionsPanel,
	PanelLevel,
	DeviceManagerProvider
} from 'ct-options'

import PanelHeader from './panel-header'

export default (props) => {

	const {
		value = {},
		options,
		onChange,
		parentContainerRef
	} = props

	const containerRef = useRef()

	const [
		values = value,
		setValues
	] = useState()

	return (
		<div className="ct-options-container" ref={containerRef}>
			<DeviceManagerProvider>
				<PanelLevel
					containerRef={containerRef}
					parentContainerRef={parentContainerRef}
					useRefsAsWrappers={true}
				>
					<PanelHeader {...props} />
					<OptionsPanel
						onChange={(key, newValue) => {
							onChange({ [key]: newValue })
							setValues({
								...values,
								[key]: newValue
							})
						}}
						value={values}
						options={options}
					/>
				</PanelLevel>
			</DeviceManagerProvider>
		</div>
	)
}
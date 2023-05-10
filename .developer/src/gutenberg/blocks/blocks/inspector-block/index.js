import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import {
	PanelBody,
	CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';

import {
	RichText,
	InspectorControls
} from '@wordpress/editor';

registerBlockType('quadlayers/inspector-block', {
	title: __('Example: Inspector', 'gutenberg-examples'),
	icon: 'universal-access-alt',
	category: 'quadlayers',
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		checkboxField: {
			type: 'boolean',
			default: true,
		},
		radioField: {
			type: 'string',
			default: 'yes',
		},
		textField: {
			type: 'string',
		},
		toggleField: {
			type: 'boolean',
		},
		selectField: {
			type: 'string',
		},
	},
	edit({ attributes, setAttributes }) {
		const { content, checkboxField, radioField, textField, toggleField, selectField } = attributes;

		function onChangeContent(newContent) {
			setAttributes({ content: newContent });
		}

		function onChangeCheckboxField(newValue) {
			setAttributes({ checkboxField: newValue });
		}

		function onChangeRadioField(newValue) {
			setAttributes({ radioField: newValue });
		}

		function onChangeTextField(newValue) {
			setAttributes({ textField: newValue });
		}

		function onChangeToggleField(newValue) {
			setAttributes({ toggleField: newValue });
		}

		function onChangeSelectField(newValue) {
			setAttributes({ selectField: newValue });
		}

		return (
			<>
				<InspectorControls>
					<PanelBody 
					title="My Block Settings"
					initialOpen={ true }
					>
						<CheckboxControl
							label="Tick Me"
							help="Checkbox Field additional help text"
							checked={checkboxField}
							onChange={onChangeCheckboxField}
						/>

						<RadioControl
							label="Radio Field"
							selected={radioField}
							options={
								[
									{ label: 'Yes', value: 'yes' },
									{ label: 'No', value: 'no' },
								]
							}
							onChange={onChangeRadioField}
						/>

						<TextControl
							label="Text Field"
							help="Additional help text"
							value={textField}
							onChange={onChangeTextField}
						/>

						<ToggleControl
							label="Toggle Field"
							checked={toggleField}
							onChange={onChangeToggleField}
						/>

						<SelectControl
							label="Select Control"
							value={selectField}
							options={
								[
									{ value: 'a', label: 'Option A' },
									{ value: 'b', label: 'Option B' },
									{ value: 'c', label: 'Option C' },
								]
							}
							onChange={onChangeSelectField}
						/>
					</PanelBody>
				</InspectorControls>

				<RichText
					key="editable"
					tagName="p"
					onChange={onChangeContent}
					value={content}
				/>
				<h2>Inspector Control Fields</h2>
				<ul>
					<li>Checkbox Field: {checkboxField ? 'check' : 'no-check'}</li>
					<li>Radio Field: {radioField}</li>
					<li>Text Field: {textField}</li>
					<li>Toggle Field: {toggleField ? 'true' : 'false'}</li>
					<li>Select Field: {selectField}</li>
				</ul>
			</>
		);
	},
	save: (props) => {
		const {
			attributes
		} = props;

		const { content, checkboxField, radioField, textField, toggleField, selectField } = attributes;

		return (
			<div>
				<RichText.Content
					value={content}
					tagName="p"
				/>
				<h2>Inspector Control Fields</h2>
				<ul>
					<li>Checkbox Field: {checkboxField ? 'check' : 'no-check'}</li>
					<li>Radio Field: {radioField}</li>
					<li>Text Field: {textField}</li>
					<li>Toggle Field: {toggleField ? 'true' : 'false'}</li>
					<li>Select Field: {selectField}</li>
				</ul>
			</div>
		);
	},
});

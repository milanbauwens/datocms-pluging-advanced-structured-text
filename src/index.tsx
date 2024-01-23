import { connect, } from 'datocms-plugin-sdk';
import { render } from './utils/render';
import ConfigScreen from './entrypoints/ConfigScreen';
import 'datocms-react-ui/styles.css';

connect({
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
  customMarksForStructuredTextField() {
		return [
			{
				id: "sub",
				label: "Subscript",
				icon: "subscript",
				keyboardShortcut: "ctrl+shift+d",
				appliedStyle: {
					verticalAlign: "sub",
					fontSize: "0.75rem",
				},
			},
			{
				id: "sup",
				label: "Superscript",
				icon: "superscript",
				keyboardShortcut: "ctrl+shift+u",
				appliedStyle: {
					verticalAlign: "top",
					fontSize: "0.75rem",
          position: "relative",
          top: "-1px",
				},
			},
		];
	},
});


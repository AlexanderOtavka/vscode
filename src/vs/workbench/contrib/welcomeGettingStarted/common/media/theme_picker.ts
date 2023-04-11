/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { escape } from 'vs/base/common/strings';
import { localize } from 'vs/nls';
import { DEFAULT_THEME_DARK_SETTING_VALUE, DEFAULT_THEME_HC_DARK_SETTING_VALUE, DEFAULT_THEME_HC_LIGHT_SETTING_VALUE, DEFAULT_THEME_LIGHT_SETTING_VALUE } from 'vs/workbench/services/themes/common/themeConfiguration';

export default () => `
<checklist>
	<div class="theme-picker-row">
		<checkbox when-checked="setTheme:${DEFAULT_THEME_DARK_SETTING_VALUE}" checked-on="config.workbench.colorTheme == '${DEFAULT_THEME_DARK_SETTING_VALUE}'">
			<img width="200" src="./dark.png"/>
			${escape(localize('dark', "Dark"))}
		</checkbox>
		<checkbox when-checked="setTheme:${DEFAULT_THEME_LIGHT_SETTING_VALUE}" checked-on="config.workbench.colorTheme == '${DEFAULT_THEME_LIGHT_SETTING_VALUE}'">
			<img width="200" src="./light.png"/>
			${escape(localize('light', "Light"))}
		</checkbox>
	</div>
	<div class="theme-picker-row">
		<checkbox when-checked="setTheme:${DEFAULT_THEME_HC_DARK_SETTING_VALUE}" checked-on="config.workbench.colorTheme == '${DEFAULT_THEME_HC_DARK_SETTING_VALUE}'">
			<img width="200" src="./dark-hc.png"/>
			${escape(localize('HighContrast', "Dark High Contrast"))}
		</checkbox>
		<checkbox when-checked="setTheme:${DEFAULT_THEME_HC_LIGHT_SETTING_VALUE}" checked-on="config.workbench.colorTheme == '${DEFAULT_THEME_HC_LIGHT_SETTING_VALUE}'">
			<img width="200" src="./light-hc.png"/>
			${escape(localize('HighContrastLight', "Light High Contrast"))}
		</checkbox>
	</div>
</checklist>
<checkbox class="theme-picker-link" when-checked="command:workbench.action.selectTheme" checked-on="false">
	${escape(localize('seeMore', "See More Themes..."))}
</checkbox>
`;

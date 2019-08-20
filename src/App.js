import React from 'react';
import { withNaming } from '@bem-react/classname';
// import logo from './logo.svg';
import './App.css';
import CardOpen from './Components/CardOpen/CardOpen';

const cn = withNaming({ e: '__', m: '_' });
const cnTheme = cn('theme');
const cnTplGrid = cn('tpl-grid');
const cnTplLayout = cn('tpl-layout');

function App() {
	return (

		<div className={cnTheme({ size: 'default', space: 'default', breakpoint: 'default', color: 'whitepaper-default', control: 'whitepaper-default', gap: 'medium' })}>
			<div className={cnTplLayout({ 'structure': '100' })}>
				<div className={cnTplLayout('container', { 'distribute': 'center', 'size': 'm' })}>
					<div className={cnTplLayout('content')}>
						<div className={cnTplGrid({ 's-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'full'})}>
							<CardOpen text="Spotify" view="spotify"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

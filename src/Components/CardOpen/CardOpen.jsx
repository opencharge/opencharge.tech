import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import './CardOpen.css';

const cn = withNaming({ e: '__', m: '_' });
const cnCardOpen = cn('CardOpen');
const cnTheme = cn('theme');
const cnPtCard = cn('pt-card');
const cnText = cn('text');
const cnIcon = cn('icon');
const cnPtList = cn('pt-list');
const cnDecorator = cn('decorator');

function CardOpen(props) {
	return (
		<div className={cnCardOpen({ width: 'full', size: 'l', view: props.view }, [cnPtCard({ width: 'full'}), cnTheme({color: 'whitepaper-inverse'})])}>
			<div className={cnPtCard('header', { 'distribute': 'center' }, [cnCardOpen('header', {})])}>
				<div className={cnText({ view: 'primary', size: 'l', weight: 'bold' })}>
				{props.text}
				</div>
			</div>
			<div className={cnPtCard('header', { 'distribute': 'between' }, [cnCardOpen('header', {})])}>
				<div className={cnCardOpen('close', [cnIcon({view: 'secondary'})])}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill-rule="evenodd" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-8.414L5.879 4.464 4.464 5.88 6.586 8l-2.122 2.121 1.415 1.415L8 9.414l2.121 2.122 1.415-1.415L9.414 8l2.122-2.121-1.415-1.415L8 6.586z"/></svg>
				</div>
				<div className={cnText({ view: 'secondary', size: 'l' }, [cnCardOpen('control', {})])}>
					Save
				</div>
			</div>
			<div className={cnPtCard('content', { distribute: 'center'}, [cnCardOpen('price', {})])}>
				<div className={cnText({ view: 'secondary', size: 'm' })}>
					Month
				</div>
				<div className={cnText({ view: 'primary', size: '4xl', weight: 'bold' })}>
					9.99 $
				</div>
			</div>
			<div className={cnPtCard('content', {})}>
				<div className={cnText({ view: 'primary', size: '2xl', weight: 'bold' }, [cnDecorator({'indent-b': 'm'})])}>
					Information
				</div>
				<div className={cnPtList({ distribute: 'between', 'space-v': 's'})}>
					<div className={cnPtList('item', {})}>
						<div className={cnText({ view: 'primary', size: 'l' })}>
							Payment card
						</div>
						<div className={cnText({ view: 'secondary', size: 'l' }, [cnCardOpen('control', {})])}>
							Add new
						</div>
					</div>
					<div className={cnPtList('item', {})}>
						<div className={cnText({ view: 'primary', size: 'l' })}>
							Profile
						</div>
						<div className={cnText({ view: 'secondary', size: 'l' }, [cnCardOpen('control', {})])}>
							Edit
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


export default CardOpen;

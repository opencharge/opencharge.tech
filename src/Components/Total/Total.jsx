import React from 'react';
import { withNaming } from '@bem-react/classname';
import "./Total.css";

const cn = withNaming({ e: '__', m: '_' });
const cnTotal = cn('total');

const cnPtCard = cn('pt-card');
const cnPtList = cn('pt-list');
const cnDecorator = cn('decorator');
const cnText = cn('text');

function Total(props) {
    return (
        <div className={ cnTotal(null, [cnPtCard({ view: 'default' })]) }>
            <div className={ cnTotal('content', [cnPtCard('content', { 'space-a': '2xl' })]) }>
                <div className={ cnDecorator({ 'indent-b': 'xl' })}>
                    <div className={ cnTotal('title', [cnText({ view: 'primary', size: 'l', weight: 'bold', align: 'center' })]) }>Total spending</div>
                </div>
                <div className={ cnDecorator({ 'indent-b': 'm' })}>
                    <div className={ cnText({ view: 'primary', size: 's', align: 'center' }) }>Month</div>
                    <div className={ cnTotal('amount', [cnText({ view: 'primary', size: '4xl', weight: 'bold', align: 'center' })]) }>${props.amountMonth}</div>
                </div>
                <div className={ cnTotal('average') }>
                    <div className={ cnDecorator({ 'indent-b': 'l' })}>
                        <div className={ cnText({ view: 'primary', size: '2xl', weight: 'bold' }) }>Average</div>
                    </div>
                    <div className={ cnPtList( { view: 'default', distribute: 'between', 'space-v': 'm' } ) }>
                        <div className={ cnPtList('item') }>
                            <div className={ cnText({ view: 'primary', size: 'm' })}>Per week</div>
                            <div className={ cnText({ view: 'primary', size: 'm' })}>${props.amountWeek}</div>
                        </div>
                        <div className={ cnPtList('item') }>
                            <div className={ cnText({ view: 'primary', size: 'm' })}>Per month</div>
                            <div className={ cnText({ view: 'primary', size: 'm' })}>${props.amountMonth}</div>
                        </div>
                        <div className={ cnPtList('item') }>
                            <div className={ cnText({ view: 'primary', size: 'm' })}>Per month</div>
                            <div className={ cnText({ view: 'primary', size: 'm' })}>${props.amountYear}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Total
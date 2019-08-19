import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import './Userpage.css';

const cn = withNaming({ e: '__', m: '_' });
const Text = cn('Text');
const Decorator = cn('Decorator');
// const PtList = cn('PtList');

// const cnUser = cn('User');
// const cnPtIconPlus = cn('PtIconPlus');
// const cnGrid = cn('TplGrid');
{/* <div className={text({'size':'s', view: 'ghost', align:'right', weight:'normal'})}>123</div> */}
{/* <div className={cnUser('Block', [cnPtIconPlus('Block', { 'space-v': '2xl' })])}></div> */}
// User__Block PtIconPlus__Block PtIconPlus__Block_space-v_2xl

class Userpage extends Component {
    render() {
        return (
            <div className='Userpage'>
                <div className='Userpage_Container'>
                    {/* userpic */}
                    {/* ВСТАВИТЬ МИШИН БЛОК ЮЗЕРА */}
                    {/* <div className={PtList({ border: 'all', view: 'default',   })}>
                        <div className={PtList('Item', { border: 'bottom', distribute: 'between' })}>
                            <div>ЛЕВО</div>
                            <div>ПРАВО</div>
                        </div>
                        <div className={PtList('Item', { border: 'bottom', distribute: 'between' })}>
                            <div>ЛЕВО</div>
                            <div>ПРАВО</div>
                        </div>
                    </div> */}
                    <div className='Userpage_List-Item'>
                            <div className={Text({'size':'m', view: 'secondary', weight:'normal'})}>Full Name</div>
                            <div className={Text({'size':'m', view: 'primary', weight:'normal'})}>Aaron Poe</div>
                    </div>
                    <div className='Userpage_List-Item'>
                            <div className={Text({'size':'m', view: 'secondary', weight:'normal'})}>Billing adress</div>
                            <div className={Text({'size':'m', view: 'primary', weight:'normal'})}>1898-1800 NW 17th St</div>
                    </div>
                    <div className='Userpage_List-Item'>
                            <div className={Text({'size':'m', view: 'secondary', weight:'normal'})}>Payment method</div>
                            <div style={{display:'inherit', alignItems: 'center'}}>
                                <div className={Decorator({ 'indent-r': 's' })}>
                                <i class="fab fa-cc-mastercard"></i>
                                </div>
                                <div className={Text({'size':'m', view: 'primary', weight:'normal'})}>•••• 2323</div>
                            </div>
                    </div>
                    <div className='Userpage_List-Item'>
                            <div className={Text({'size':'m', view: 'secondary', weight:'normal'})}>Notifications email adress</div>
                            <div className={Text({'size':'m', view: 'primary', weight:'normal'})}>aaron.poe@protonmail.com</div>
                    </div>
                    <div className='Userpage_List-Item'>
                            <div className={Text({'size':'m', view: 'secondary', weight:'normal'})}>Mobile phone number</div>
                            <div className={Text({'size':'m', view: 'primary', weight:'normal'})}>+1(234)567890</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Userpage;
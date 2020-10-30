import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

import Item from './Item'
import Lead from './Lead'

export default class Header2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu_class: '',
        }
    }

    setToggleTopMenuClass = () => {
        if (this.state.menu_class === ''){
            this.setState({
                menu_class: 'toggled',
            })
        } else {
            this.setState({
                menu_class: '',
            })
        }
    }

    render = () => {
        let top_menu_class = `top-menu ${this.state.menu_class}`
        return (
            <header>
                <div className={top_menu_class}>
                    <Lead text='Tiffany Summerford' />
                        <div className='right'>
                            <Item text={<a href='mailto:TiffanySummerford@gmail.com?subject=Great%20Portfolio!' class='fa fa-envelope'> Email</a>} />
                            <Item text={<a href='https://docs.google.com/document/d/197BVM5qzyqYR3YKwqyubg3gBn4josekLuRtmG_Cyh0o/edit?usp=sharing' target='_blank' className='fa fa-folder-open-o'> Resume</a>} />
                            <Item text={<a href='https://github.com/breakfastatiffs/' target='_blank' className='fa fa-github-alt'> GitHub</a>} />
                            <Item text={<a href='https://www.linkedin.com/in/tiffany-summerford' target='_blank' className='fa fa-linkedin-square'> LinkedIn</a>} />
                        </div>
                    <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
                    <div className='clear-fix'>

                    </div>
                </div>
            </header>
        )
    }
}
import { Link } from 'react-router-dom'

import '../index.css'

export default function SideBar() {
    return (
        <div className="sidebar" >
            <p>side test</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/todo">ToDo</Link></li>
            </ul>
        </div>
    )
}

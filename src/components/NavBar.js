import React from 'react';

export default function NavBar({ onPageChange }) {
    return (
        <ul className="nav nav-tabs justify-content-center">
            <li className="nav nav-item">
                <a className="nav-link" href='#about' onClick={() => onPageChange('About')}>About</a>
            </li>
            <li className="nav nav-item">
                <a className="nav-link" href='#portfolio' onClick={() => onPageChange('Portfolio')}>Portfolio</a>
            </li>
            <li className="nav nav-item">
                <a className="nav-link" href='#contact' onClick={() => onPageChange('Contact')}>Contact Me</a>
            </li>
            <li className="nav nav-item">
                <a className="nav-link" href='#resume' onClick={() => onPageChange('Resume')}>View my Resume</a>
            </li>
        </ul>
    )
}
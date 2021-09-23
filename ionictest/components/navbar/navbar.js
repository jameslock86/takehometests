import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg ">
  <div className="container-xl">
    <Link href="/">
      <a className="navbar-brand"><svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 20C14.4771 20 10 15.5228 10 10H30C30 15.5228 25.5228 20 20 20ZM30 10H40L20 32L0 10L10 10L20 0L30 10Z" fill="#FD815A"/>
</svg>
</a>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link">Product</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/articles">
            <a className="nav-link">Features</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/writes">
            <a className="nav-link">Enterprise</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/writes">
            <a className="nav-link">Company</a>
          </Link>
        </li>
        
        <li>
            <Link href="/writes">
                <a className="nav-link">Sign In</a>
            </Link>
        </li>
        <li>
            <Link href="/writes">
             <a className="nav-link">Download</a>
            </Link>
        </li>
        
      </ul>
    </div>
  </div>
</Nav>
  )
}

import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="left-sidebar">
      <div className="logo">
        <a href="#welcome">
          <img src="/img/logo.png" alt="Coffee Logo" />
        </a>
      </div>
      <nav className="left-nav">
        <ul id="nav">
          <li className="current"><a href="#welcome">Welcome</a></li>
          <li><a href="#installation">Installation</a></li>
          <li><a href="#tmpl-structure">Structure</a></li>
          <li><a href="#css-structure">CSS Files</a></li>
          <li><a href="#javascript">JavaScript Libraries</a></li>
          <li><a href="#contact-form">Contact Form</a></li>
          <li><a href="#subscription-form">Subscription Form</a></li>
          <li><a href="#video">Video Tutorial</a></li>
          <li><a href="#credit">Source and Credit</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

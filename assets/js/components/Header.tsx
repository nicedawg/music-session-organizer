import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <h1>Music Session Organizer</h1>
      <nav>
        <Link to="/app/groups">
          Groups
        </Link>
      </nav>
    </header>
  );
}

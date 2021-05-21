import React, { MouseEvent } from 'react';
import { Button, MenuItem, Menu } from '@material-ui/core';

export default function ListOne() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget as any);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Alfredo</MenuItem>
        <MenuItem onClick={handleClose}>Cheese</MenuItem>
        <MenuItem onClick={handleClose}>Ham</MenuItem>
        <MenuItem onClick={handleClose}>Herbs</MenuItem>
        <MenuItem onClick={handleClose}>Pepperoni</MenuItem>
      </Menu>
    </div>
  );
}
import React from 'react';
import { Link, useMatch, useResolvedPath, LinkProps } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ borderBottom: match ? "2px solid #facc15" : "none"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && ""}
      </div>
    );
  }

export default CustomLink;
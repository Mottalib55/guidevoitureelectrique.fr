import Link from "next/link";
import { mainNav } from "@/data/navigation";

export default function NavDropdown() {
  return (
    <nav className="nav-desktop" aria-label="Navigation principale">
      {mainNav.map((section) => (
        <div key={section.href} className="nav-desktop-item">
          <Link href={section.href} className="nav-desktop-link">
            {section.label}
          </Link>
          <div className="nav-desktop-dropdown">
            {section.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="nav-desktop-dropdown-link"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

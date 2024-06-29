import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <div>
        <div></div>
        <div>
          <Link to="/">Strona główna</Link>
          <Link to="/">Aktualności</Link>
          <Link to="/">Seniorzy</Link>
          <Link to="/">Szkółka Piłkarska</Link>
          <Link to="/">Multimedia</Link>
          <Link to="/">Kontakt</Link>
          </div>
        <div></div>
    </div>
  )
}

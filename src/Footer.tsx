import { API_URL } from "./api";

interface FooterProps {
  apiVersion: string;
}

function Footer(props: FooterProps) {
  return (
    <footer className="text-center">
      <p>
        App version:{" "}
        <a id="app-link" href={window.location.href}>
          <code id="app-version">{import.meta.env.PACKAGE_VERSION}</code>
        </a>
      </p>
      <p>
        API version:{" "}
        <a id="api-link" href={API_URL}>
          <code id="api-version">{props.apiVersion || ""}</code>
        </a>
      </p>
    </footer>
  );
}

export default Footer;

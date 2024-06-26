import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import "./firstsection.scss";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "semantic-ui-css/components/icon.min.css";

export function Firstsection(props) {
  const { language } = props;
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `&lt;${language.FS.rol.dev}/&gt;`,
        `&lt;${language.FS.rol.ing}/&gt;`,
      ],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 200,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, [language]);
  return (
    <div id="viquialochis" data-aos="fade-down"  className="first-block">
      <div className="img_block">
        <div className="avatar_main"></div>
      </div>
      <div className="about_me_block">
        <h2>{language.FS.title}</h2>
        <div className="dev_title">
          <span ref={el} className="dev_title_span"></span>
        </div>
        <span
          className="summary_about_me"
          dangerouslySetInnerHTML={{ __html: language.FS.content }}
        ></span>
        <div className="icons_profile">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/victoria-alochis/"
          >
            <Icon size="large" name="linkedin" />
          </Link>
          <Link
            target="_blank"
            to="https://github.com/viquialochis"
          >
            <Icon size="large" name="github" />
          </Link>
          <Link
            to="mailto:vikialochis@hotmail.com"
          >
            <Icon size="large" name="mail" />
          </Link>
        </div>
        <div className="download_button">
          <a
            className="btn btn_yellow"
            download
            href={`/document/${language.FS.document}.pdf`}>
            {language.FS.button} <Icon name="download" />
          </a>
        </div>
      </div>
    </div>
  );
}


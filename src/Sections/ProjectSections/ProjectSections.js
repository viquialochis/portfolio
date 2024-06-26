import React from "react";
import "./ProjectSections.scss";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import LazyLoad from "react-lazy-load";
/*
export function ProjectSections(props) {
  const { language } = props;
  return (
    <div style={{minHeight:'900px', height:'100%'}}>
      <div id="projects"></div>
      <LazyLoad offset={0}>
      <div className="project_sections">
        <h2 className="title_content">{language.title}</h2>
        <div className="project_container">
          {language.projects.map((project, index) => (
            <div key={index} className="item_card_project" data-aos="zoom-in">
              <h4 className="item_card_title">
                <Icon name={project.icon} /> {project.title}
              </h4>
              <div className="image_card">
                <img src={project.img} alt={project.title} loading="lazy" />
                <div className="content_img">
                  {project.content}
                  <Link
                    to={project.link}
                    className="btn btn_yellow"
                    target="_blank"
                  >
                    <Icon name="computer" /> {language.demo}
                  </Link>
                  {project.code ? (<Link
                    to={project.code}
                    className="btn btn_red"
                    target="_blank"
                  >
                    <Icon name="github" />{language.code}
                  </Link>)
                  : ""
                  }
                </div>
                <div className="background_img"></div>
              </div>
              <div className="tecnologies_card">
                {project.tecnology.map((tecnology, index) => (
                  <span key={index} className={`tag ${project.tag[index]}`}>
                    {tecnology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </LazyLoad>
    </div>
  );
}
*/
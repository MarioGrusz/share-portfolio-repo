import "./index.scss";
import { ProjectsMenuData } from '../../data';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import handleReload from "../../utils/handleReload";



const ProjectsMenu = () => {
    const location = useLocation();

    const listItem = ProjectsMenuData.map((item, index) => {
        let itemClassName = ["projects-list__item"];
        if (location.pathname === "/project-ai-spanish-assistant" && index === 0) {
            itemClassName.push(" link-disable");
        }
        if (location.pathname === "/project-bean-searcher" && index === 1) {
            itemClassName.push(" link-disable");
        }
        if (location.pathname === "/project-productivity-helper" && index === 2) {
            itemClassName.push(" link-disable");
        }


        return (
            <li key={index} className={itemClassName}>
                <Link to={item.link} className="projects-list__item-link">
                    <div className="projects-list__item-title">
                        <div>{item.title}</div>
                        <div className="projects-list__hover-title">
                            <div>{item.hover}</div>
                        </div>  
                    </div>
                </Link>
            </li>
        );
    });

    return (
        <>
            <ol className="projects-list">
                {listItem}
            </ol>
        </>
    );
}

export default ProjectsMenu
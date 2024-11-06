"use client";
import React, { useState, useEffect } from "react";
import styles from "./portfolio.module.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import ProjectCard from "../projectCard/ProjectCard";
import axios from "axios";
import { useAuth } from "@/app/context/AuthContext";
import MiniCard from "../achivement/MiniCard";
import dynamic from "next/dynamic";

let projectData = [];

export function Portfolio({addInputPage=false}) {
  console.log(addInputPage)
  const { user,set_saved_projects,saved_projects } = useAuth();
  const [data, setData] = useState(projectData);
  const [isSavedProject, setBool] = useState(false);
  const [savedOrShared, setValue] = useState("");
  const [savedProjects, setSavedProjects] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/projects/");
      if (response.data.status == true) {
        setData(response.data.data.projects);
        projectData = response.data.data.projects;
        if(addInputPage){
          filterSavedProject()
          setBool(false);
        }
      } else {
        projectData = [
          {
            id: 1,
            title: "Kemampuan Merangkum Tulisan",
            description:
              "Lorem ipsum dolor sit amet consectetur. Nulla risus malesuada ac turpis tempus. Lorem ipsum dolor sit amet consectetur....",
            category: "BAHASA SUNDA",
            author: "Al-Baiqi Samaan",
            image: "/image1.png",
          },
          {
            id: 2,
            title: " Tulisan",
            description:
              "Lorem ipsum dolor sit amet consectetur. Nulla risus malesuada ac turpis tempus. Lorem ipsum dolor sit amet consectetur....",
            category: "BAHASA SUNDA",
            author: "Al-Baiqi Samaan",
            image: "http://localhost:3000/image2.png",
          },
          {
            id: 3,
            title: "Kemampuan Merangkum Tulisan",
            description:
              "Lorem ipsum dolor sit amet consectetur. Nulla risus malesuada ac turpis tempus. Lorem ipsum dolor sit amet consectetur....",
            category: "BAHASA SUNDA",
            author: "Al-Baiqi Samaan",
            image: "http://localhost:3000/image3.png",
          },
          {
            id: 4,
            title: "Kemampuan Merangkum Tulisan",
            description:
              "Lorem ipsum dolor sit amet consectetur. Nulla risus malesuada ac turpis tempus. Lorem ipsum dolor sit amet consectetur....",
            category: "BAHASA SUNDA",
            author: "Al-Baiqi Samaan",
            image: "http://localhost:3000/image4.png",
          },
        ];
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = projectData.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(filteredData);
  }, [searchQuery]);

  const [activeNavItem, setActiveNavItem] = useState(""); // To store the active item

  const handleNavClick = (item) => {
    setActiveNavItem(item);
    if (item == "achievement" || item == "shared") {
      setValue(item);
    } else {
      setValue("");
    }
  };

  function filterSavedProject() {

    const savedProjects = data.filter((project) =>{
      return user.savedProjects.includes(project.id)}
    );

    setSavedProjects(savedProjects);
    setBool(true);
}


  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <Sidebar />
        <section className={styles.projectSection}>
          <h1 className={styles.sectionTitle}>{!addInputPage?"Portfolio":"Input"}</h1>
          {!addInputPage&&<nav className={styles.portfolioNav}>
            <ul className={styles.navList}>
              <li
                className={`${styles.navItem} ${
                  activeNavItem === "project" ? styles.active : ""
                }`}
              >
                <a
                  href="/project"
                  className={styles.navLink}
                  onClick={() => {
                    handleNavClick("project");
                    setBool(false);
                  }}
                >
                  Project
                </a>
              </li>
              <li
                className={`${styles.navItem} ${
                  activeNavItem === "saved" ? styles.active : ""
                }`}
              >
                <a
                  className={styles.navLink}
                  onClick={() => {
                    handleNavClick("saved");
                    filterSavedProject();
                  }}
                >
                  Saved
                </a>
              </li>
              <li
                className={`${styles.navItem} ${
                  activeNavItem === "shared" ? styles.active : ""
                }`}
              >
                <a
                  className={styles.navLink}
                  onClick={() => handleNavClick("shared")}
                >
                  Shared
                </a>
              </li>
              <li
                className={`${styles.navItem} ${
                  activeNavItem === "achievement" ? styles.active : ""
                }`}
              >
                <a
                  className={styles.navLink}
                  onClick={() => handleNavClick("achievement")}
                >
                  Achievement
                </a>
              </li>
            </ul>
          </nav>}
          {!addInputPage&&<div className={styles.filterSearch}>
            <button className={styles.filterButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25f2c1fcb0f762423c26c8c190804458e3547b2e4ff4d461a86fa76dfc7621a0?placeholderIfAbsent=true&apiKey=23c558b43f3b4e1e864f68a8828bbd16"
                alt=""
                className={styles.filterIcon}
              />
              Filter
            </button>
            <form
              className={styles.searchForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="projectSearch" className={styles.visuallyHidden}>
                Search a project
              </label>
              <input
                type="search"
                id="projectSearch"
                className={styles.searchInput}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                placeholder="Search a project"
                aria-label="Search a project"
              />
              <button type="submit" className={styles.searchButton}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dee74c86ca0f3eb2024db3e0a90e8cfa9000e08e410ce97c460d90f460f6a4f?placeholderIfAbsent=true&apiKey=23c558b43f3b4e1e864f68a8828bbd16"
                  alt="Search"
                  className={styles.searchIcon}
                />
              </button>
            </form>
          </div>}
          <div className={styles.projectGrid}>
            {addInputPage?saved_projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                    isSaved={isSavedProject}
                    isAddInputPage={addInputPage}
                  />
                )):savedOrShared === "" ? (
              isSavedProject ? (
                savedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                    isSaved={isSavedProject}
                    isAddInputPage={addInputPage}
                  />
                ))
              ) : (
                data.map((project) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                    isSaved={isSavedProject}
                  />
                ))
              )
            ) : savedOrShared === "shared" ? (
              <MiniCard data="No data to Display" />
            ) : user.achievements.length > 0 ? (
              user.achievements.map((achievement) => (
                <MiniCard key={achievement.id} data={achievement} />
              ))
            ) : (
              <MiniCard data="No data to Display" />
            )}
          </div>
        </section>
      </main>
    </>
  );
}


export default dynamic (() => Promise.resolve(Navbar), {ssr: false})


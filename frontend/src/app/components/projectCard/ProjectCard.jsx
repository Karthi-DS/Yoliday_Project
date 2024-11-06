import React from 'react';
import styles from './projectCard.module.css';
import axios from 'axios';
import { useAuth } from '@/app/context/AuthContext';


function ProjectCard({ title,id, description, category, author, image ,isSaved,isAddInputPage=false}) {
  const {user,login} = useAuth();
  console.log(isAddInputPage,"add input page");
  async function addToSavedProject(id){
    const response = await axios.post("http://localhost:5000/user/updateUser",{id:user.id,projectId:id});
    if(response.data.status){
      alert("Project added successfully.")
      let savedProjects = user.savedProjects
      savedProjects.push(id)
      login({...user,savedProjects:savedProjects})
    }else{
      alert("Try again.")
    }
}
  // async function updateInput() {
  //   const response = await axios.post()
  // }
  return (
    <article className={styles.projectCard}>
      <img src={image} alt="" className={styles.projectImage} />
      <div className={styles.projectInfo}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectMeta}>
          <div className={styles.projectCategory}>
            <div className={styles.categoryName}>{category}</div>
            <div className={styles.projectAuthor}>Oleh <span>{author}</span></div>
          </div>
          {!isSaved&&<button className={styles.addToCartButton} onClick={()=>addToSavedProject(id)}>Save Project</button>}
          {isAddInputPage&&<>
            <button className={styles.addToCartButton} onClick={()=>addToSavedProject(id)}>Add Input</button>
          <form
              className={styles.searchForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="text" className={styles.visuallyHidden}>
                Add Input
              </label>
              <input
                type="text"
                id="text"
                className={styles.searchInput}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                placeholder="Search a project"
                aria-label="Search a project"
              />
              <button type="submit" className={styles.searchButton}>
                Add
              </button>
            </form>
          </>
         
          }
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  const [task, setTask] = useState("");
  const [progress, setProgress] = useState("");
  const [done, setDone] = useState("");

  const [tasks, setTasks] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const deleteTask = (indexToDelete) => {
  setTasks(tasks.filter((item, index) => index !== indexToDelete));
};
const deleteProgress = (indexToDelete) => {
  setProgressList(
    progressList.filter((item, index) => index !== indexToDelete)
  );
};
const deleteDone = (indexToDelete) => {
  setDoneList(
    doneList.filter((item, index) => index !== indexToDelete)
  );
};

  function addTask() {
        if (task.trim() === "") return;

        setTasks([...tasks, task]);
        setTask("");
    }

  const addProgress = () => {
    if (progress.trim() === "") return;

    setProgressList([...progressList, progress]);
    setProgress("");
  };

  const addDone = () => {
    if (done.trim() === "") return;

    setDoneList([...doneList, done]);
    setDone("");
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Daily workflow</p>
      </section>

      <section className={styles.board}>
        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Task</h2>
            <span>01</span>
          </div>

          <input
            type="text"
            placeholder="Enter your task"
            className={styles.input}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            className={styles.button}
            onClick={addTask}
          >
            Add Task
          </button>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>In Progress</h2>
            <span>02</span>
          </div>

          <input
            type="text"
            placeholder="In Progress"
            className={styles.input}
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />

          <button
            className={styles.button}
            onClick={addProgress}
          >
            Add
          </button>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Done</h2>
            <span>03</span>
          </div>

          <input
            type="text"
            placeholder="Done"
            className={styles.input}
            value={done}
            onChange={(e) => setDone(e.target.value)}
          />

          <button
            className={styles.button}
            onClick={addDone}
          >
            Add
          </button>
        </article>
      </section>

      <section className={styles.lists}>
        <article className={styles.listCard}>
          <div className={styles.listHeader}>
            <h2>Task List</h2>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.listItems}>
            {tasks.length === 0 ? (
              <p className={styles.emptyState}>No tasks added yet.</p>
            ) : (
              tasks.map((item, index) => (
                <div className={styles.taskRow} key={`task-${index}`}>
                  <p className={styles.taskItem}>{item}</p>
                  <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </article>

        <article className={styles.listCard}>
          <div className={styles.listHeader}>
            <h2>In Progress List</h2>
            <span>{progressList.length}</span>
          </div>

          <div className={styles.listItems}>
            {progressList.length === 0 ? (
              <p className={styles.emptyState}>Nothing is in motion yet.</p>
            ) : (
              progressList.map((item, index) => (
                <div className={styles.taskRow} key={`progress-${index}`}>
                  <p className={styles.taskItem}>{item}</p>
                  <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => deleteProgress(index)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </article>

        <article className={styles.listCard}>
          <div className={styles.listHeader}>
            <h2>Done List</h2>
            <span>{doneList.length}</span>
          </div>

          <div className={styles.listItems}>
            {doneList.length === 0 ? (
              <p className={styles.emptyState}>Completed items will appear here.</p>
            ) : (
              doneList.map((item, index) => (
                <div className={styles.taskRow} key={`done-${index}`}>
                  <p className={styles.taskItem}>{item}</p>
                  <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => deleteDone(index)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </article>
      </section>
      <div className={styles.logoutWrap}>
        <Link href="/login" className={styles.link}>
          Logout
        </Link>
      </div>
    </main>
  );
}
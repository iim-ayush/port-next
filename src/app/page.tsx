"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState("main");
  function observedSomeSection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }
  useEffect(() => {
    const observer = new IntersectionObserver(observedSomeSection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
    observer.observe(document.getElementById("main")!);
    observer.observe(document.getElementById("about")!);
    observer.observe(document.getElementById("services")!);
    observer.observe(document.getElementById("work")!);
    observer.observe(document.getElementById("contact")!);
  });
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <Nav activeSection={activeSection} />
      <About />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}

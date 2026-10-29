fetch("projects.json")
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById("projects");

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project";
      card.dataset.category = project.category;
      
      const title = document.createElement("h3");
      title.textContent = project.title;

      const meta = document.createElement("p");
      meta.textContent = `${project.category} · ${project.status}`;

      const summary = document.createElement("p");
      summary.textContent = project.summary;

      card.append(title, meta, summary);

      if (project.link) {
        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "View project";
        card.append(link);
      }

      container.append(card);
    });
  });

const filterBox = document.getElementById("filters");
const categories = ["all", "AI", "research", "software"];

categories.forEach(category => {
  const button = document.createElement("button");
  button.textContent = category;
  button.addEventListener("click", () => {
    document.querySelectorAll("#projects .project").forEach(card => {
      const shown = category === "all" || card.dataset.category === category;
      card.style.display = shown ? "" : "none";
    });
  });
  filterBox.append(button);
});